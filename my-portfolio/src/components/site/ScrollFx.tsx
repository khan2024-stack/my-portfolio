"use client";

import { useEffect } from "react";

/**
 * Two page-level effects, kept out of the section components:
 *   · a reading-progress bar across the top
 *   · scroll reveals for anything carrying `.rv`
 *
 * Both respect prefers-reduced-motion.
 */
export default function ScrollFx() {
  useEffect(() => {
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ── Land on the fragment when the page is opened at one ──
       Arriving at /#work — which is what the old /page/work URLs now
       redirect to — the browser tries to scroll before the portrait,
       the project shots and hydration have settled. Every one of those
       moves the target, so Chrome abandons the scroll and the visitor
       is left at the hero. Re-apply it after mount, and again on load
       once the images have real heights. `instant` on purpose: a two
       second glide on page open reads as a bug, not an animation. */
    const hash = window.location.hash;
    const land = () => {
      if (hash.length < 2) return;
      document
        .querySelector(hash)
        ?.scrollIntoView({ behavior: "instant", block: "start" });
    };
    land();
    window.addEventListener("load", land, { once: true });

    /* ── Reading progress ── */
    const bar = document.getElementById("progress");
    let ticking = false;

    const draw = () => {
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(draw);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    draw();

    /* ── Scroll reveal, staggered within each group ── */
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const peers = el.parentElement
            ? Array.from(el.parentElement.children).filter((n) =>
                n.classList.contains("rv")
              )
            : [];
          const i = Math.max(0, peers.indexOf(el));
          el.style.setProperty("--d", `${Math.min(i, 6) * 60}ms`);
          el.classList.add("on");
          reveal.unobserve(el);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px" }
    );

    document.querySelectorAll(".rv").forEach((el) => {
      if (calm) el.classList.add("on");
      else reveal.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("load", land);
      reveal.disconnect();
    };
  }, []);

  return <div className="progress" id="progress" aria-hidden="true" />;
}
