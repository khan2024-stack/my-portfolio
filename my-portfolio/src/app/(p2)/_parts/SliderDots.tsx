"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Pagination dots for a card group that turns into a swipe slider on
 * phones. Place it directly AFTER the group: it finds the previous
 * sibling, counts its children as slides, follows its scroll position,
 * and scrolls to a slide when a dot is pressed.
 *
 * The group itself is plain markup — the slider behaviour is CSS
 * scroll-snap (see "PHONE SLIDERS" in p2.css), so with no JS the cards
 * still swipe; the dots are the only part that needs this component. They
 * are hidden by CSS above 680px, where the group is a normal grid.
 */
export default function SliderDots() {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const dots = ref.current;
    const track = dots?.previousElementSibling as HTMLElement | null;
    if (!track) return;

    let raf = 0;
    const measure = () => {
      raf = 0;
      const slides = Array.from(track.children) as HTMLElement[];
      setCount(slides.length);
      const left = track.getBoundingClientRect().left;
      const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
      let best = 0;
      let bestDist = Infinity;
      slides.forEach((s, i) => {
        const d = Math.abs(s.getBoundingClientRect().left - left - pad);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };

    measure();
    track.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      track.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const go = (i: number) => {
    const track = ref.current?.previousElementSibling as HTMLElement | null;
    const slide = track?.children[i] as HTMLElement | undefined;
    if (!track || !slide) return;
    // Distance from where the slide sits now to the track's padded left
    // edge — measured with rects, since offsetLeft is relative to the
    // nearest positioned ancestor, not the scroll track.
    const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    const delta =
      slide.getBoundingClientRect().left -
      track.getBoundingClientRect().left -
      pad;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: track.scrollLeft + delta,
      behavior: calm ? "auto" : "smooth",
    });
  };

  return (
    <div className="p2-dots" ref={ref}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          className={i === active ? "is-on" : undefined}
          aria-label={`Show card ${i + 1} of ${count}`}
          aria-current={i === active ? "true" : undefined}
          onClick={() => go(i)}
        />
      ))}
    </div>
  );
}
