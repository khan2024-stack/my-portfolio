"use client";

import { useEffect, useRef, useState } from "react";

type Dir = "up" | "left" | "right" | "fade";
/* Only the tags this component is actually asked for — narrower than
   `keyof JSX.IntrinsicElements`, which also matches SVG tags whose ref
   type isn't compatible with the plain HTMLElement one below. */
type Tag = "div" | "article" | "p" | "section";

/**
 * The reference animates almost every widget in on scroll — Elementor's
 * own entrance-animation system, confirmed on the live page via each
 * element's `data-settings` (`fadeInUp`, `fadeInLeft`, `fadeInRight`,
 * `fadeIn`) and its computed `animation-duration: 1.25s`. This is a
 * plain equivalent: an IntersectionObserver fires the reveal once, the
 * CSS in p2.css does the actual opacity/transform tween.
 *
 * Above-the-fold elements on the reference animate immediately on page
 * load, not on scroll — because they're already inside the viewport
 * the moment the observer attaches. `rootMargin` is intentionally 0 so
 * this component reproduces that without special-casing "is this the
 * hero" anywhere.
 */
export default function Reveal({
  as = "div",
  dir = "up",
  delay = 0,
  className,
  children,
}: {
  as?: Tag;
  dir?: Dir;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = as as "div";
  return (
    <Comp
      ref={ref as React.RefObject<HTMLDivElement | null>}
      className={`p2-reveal p2-reveal--${dir}${on ? " is-on" : ""}${className ? ` ${className}` : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Comp>
  );
}
