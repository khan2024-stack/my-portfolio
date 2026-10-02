"use client";

import { useEffect, useRef } from "react";

/**
 * A live chart-recorder trace — the page's one genuinely computed
 * element, and the reason it cannot be assembled from theme parts.
 *
 * Every frame the buffer scrolls one step left and a new column of
 * signal is computed and drawn on the right, which is how a paper
 * chart recorder or a spectrum analyser actually renders time. The
 * signal is synthesised, not recorded: three gaussian formant peaks
 * sitting roughly where vowels do, modulated by a ~4Hz syllable
 * envelope and a slower breath drift, so it reads as speech rather
 * than as a generic music visualiser.
 *
 * Moving the pointer over the strip changes the signal — X raises the
 * gain, Y slides the formants up and down the band. That is the tell
 * that it is computed rather than a looping GIF.
 *
 * Rendered as ink on paper for this light system: a filled envelope in
 * blueprint blue, a crisp centre trace over it, and peaks tipped in
 * signal orange where energy crosses the threshold.
 */

/* Frequency bands sampled per column. Coarse on purpose — a real
   analyser is banded, and it keeps the per-frame cost low. */
const BANDS = 44;
/* Pixels advanced per frame. */
const SPEED = 2;
/* Energy above this is drawn as a peak. */
const PEAK = 0.62;

export default function SignalStrip() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /* History lives in its own buffer and is blitted each frame.
       Scrolling a buffer is far cheaper than recomputing the whole
       visible history every tick. */
    const buf = document.createElement("canvas");
    const bctx = buf.getContext("2d", { alpha: false });
    if (!bctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;
    /* Pointer influence is eased rather than applied raw — a hard jump
       on every mousemove would make the trace snap instead of bend. */
    let px = 0.5;
    let py = 0.5;
    let ex = 0.5;
    let ey = 0.5;

    /* Overall loudness at time `time`, 0..1 — the envelope the trace
       height is drawn from. */
    const level = (time: number) => {
      let sum = 0;
      for (let i = 0; i < BANDS; i++) sum += band(i / BANDS, time);
      return Math.min(1, sum / BANDS / 0.42);
    };

    /* Energy in one band. `b` is 0 (low) → 1 (high). */
    const band = (b: number, time: number) => {
      const shift = (ey - 0.5) * 0.24;
      const g = (centre: number, width: number, gain: number) =>
        gain * Math.exp(-(((b - centre - shift) / width) ** 2));

      const formants = g(0.12, 0.12, 1) + g(0.32, 0.17, 0.7) + g(0.58, 0.24, 0.4);

      /* Speech, not a sine wave. A single modulated sine produced a
         perfectly even row of identical humps — pretty, but it read as
         decoration, and the whole point of this element is that it is
         computing something real. Three ingredients fix that:

         · two syllable rates that share no common period, so the
           pattern never visibly repeats;
         · `pow(env, 1.7)`, which sharpens the onsets — real speech
           attacks fast and decays slowly, a sine does neither;
         · a word-gap term at a third unrelated rate that drops the
           envelope close to silence between bursts, which is what
           actually makes a trace look like someone talking. */
      const s1 = 0.5 + 0.5 * Math.sin(time * 4.1 + Math.sin(time * 0.6) * 1.4);
      const s2 = 0.5 + 0.5 * Math.sin(time * 6.73 + 2.1);
      const gap = Math.max(0, Math.sin(time * 1.13 + 0.4));

      let env = s1 * (0.6 + 0.4 * s2);
      env *= 0.16 + 0.84 * Math.sqrt(gap);
      env = Math.pow(env, 1.7);

      const breath = 0.74 + 0.26 * Math.sin(time * 0.37 + 1.1);
      const lift = 0.7 + 0.4 * ex;
      return formants * env * breath * lift * 2.1;
    };

    const size = () => {
      const r = cv.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, Math.round(r.width));
      h = Math.max(1, Math.round(r.height));
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      buf.width = w;
      buf.height = h;
      bctx.setTransform(1, 0, 0, 1, 0, 0);
      prefill();
    };

    /* Half-height of the previous column, so each new column can draw
       its edge as a span joining the two rather than an isolated
       1.5px tick. Without this the outline broke into dots wherever
       the envelope rose or fell faster than ~2px per column, which is
       most of the interesting part of the signal. */
    let lastHalf = 0;

    /* One column of the trace, drawn at x. */
    const column = (x: number, time: number) => {
      const v = level(time);
      const half = v * h * 0.44;
      const mid = h * 0.5;

      bctx.fillStyle = "#ffffff";
      bctx.fillRect(x, 0, SPEED, h);

      /* Faint baseline so the strip reads as ruled paper even in
         silence. */
      bctx.fillStyle = "#e9e9e4";
      bctx.fillRect(x, mid, SPEED, 1);

      /* Filled envelope — pale blue body, so the shape reads at a
         glance from across the room. */
      bctx.fillStyle = "rgba(11, 77, 255, 0.13)";
      bctx.fillRect(x, mid - half, SPEED, half * 2);

      /* Ink edges, spanning from the previous column's height to this
         one so the outline stays unbroken on steep slopes. Peaks tip
         orange — the only place the signal colour appears on the whole
         page, so it means "loud" rather than decorating. */
      const a = mid - half;
      const b = mid - lastHalf;
      const top = Math.min(a, b);
      const run = Math.abs(a - b) + 1.6;
      bctx.fillStyle = v > PEAK ? "#ff5c1a" : "#0b4dff";
      bctx.fillRect(x, top, SPEED, run);
      bctx.fillRect(x, h - top - run, SPEED, run);

      lastHalf = half;
    };

    /* Paint the whole history at once by evaluating the signal
       backwards in time, so the strip arrives already running. Without
       this it starts blank and takes width/SPEED frames — around
       fifteen seconds — to fill, and the first impression is an empty
       box slowly drawing itself. */
    const prefill = () => {
      bctx.fillStyle = "#ffffff";
      bctx.fillRect(0, 0, w, h);
      /* Seed lastHalf from one column before the first, or the leftmost
         edge draws a spike down from zero. */
      lastHalf = level(t - (w / SPEED) * (1 / 60)) * h * 0.44;
      for (let x = 0; x < w; x += SPEED) {
        column(x, t - ((w - x) / SPEED) * (1 / 60));
      }
    };

    const frame = () => {
      t += reduce ? 0 : 1 / 60;
      ex += (px - ex) * 0.06;
      ey += (py - ey) * 0.06;

      /* Shift the history left. Drawing a canvas onto itself is legal;
         'copy' makes it a move rather than a composite, which avoids
         the previous contents ghosting through. */
      bctx.globalCompositeOperation = "copy";
      bctx.drawImage(buf, -SPEED, 0);
      bctx.globalCompositeOperation = "source-over";
      column(w - SPEED, t);

      ctx.drawImage(buf, 0, 0);

      /* Live playhead at the right edge, drawn on the visible canvas
         rather than into the buffer so it does not scroll away. */
      const v = level(t);
      const mid = h * 0.5;
      ctx.fillStyle = "rgba(15,17,21,.14)";
      ctx.fillRect(w - 1, 0, 1, h);
      ctx.beginPath();
      ctx.arc(w - 1, mid - v * h * 0.44, 3, 0, Math.PI * 2);
      ctx.fillStyle = v > PEAK ? "#ff5c1a" : "#0b4dff";
      ctx.fill();

      raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      px = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      py = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    };

    /* A trace scrolling in a tab nobody is looking at is wasted
       battery — rAF already throttles when hidden, this stops it. */
    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(frame);
    };

    const ro = new ResizeObserver(size);
    ro.observe(cv);
    size();
    raf = requestAnimationFrame(frame);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" />;
}
