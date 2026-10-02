"use client";

import { useEffect, useRef } from "react";
import type { education, experience } from "@/app/portfolio-content/site-content";

/**
 * The career timeline, with each row's marker lighting as it reaches
 * reading position.
 *
 * The observer's rootMargin is deliberately asymmetric — `-45% 0px
 * -45% 0px` collapses the viewport to a thin band across the middle,
 * so a row lights when it arrives where someone is actually reading
 * rather than the moment its top edge clips the bottom of the screen.
 * A plain threshold lights everything at once on a tall screen, which
 * defeats the point.
 *
 * Rows stay lit once passed; scrolling back up should not un-tell you
 * something you have already read.
 */
export default function Timeline({
  items,
  cap,
}: {
  items: typeof experience | typeof education;
  cap?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const rows = Array.from(root.querySelectorAll<HTMLElement>(".x-tl__row"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      rows.forEach((r) => r.classList.add("lit"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("lit");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    rows.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, [items]);

  return (
    <div className="x-tl" ref={ref}>
      {items.map((e) => (
        <div className="x-tl__row" key={e.title}>
          <span className="x-tl__dot" aria-hidden="true">
            <i />
          </span>
          <div>
            <span className="x-tl__when">{e.period}</span>
            <span className="x-tl__dur">{e.duration}</span>
          </div>
          <div className="x-tl__b">
            <h3>{e.title}</h3>
            <p className="x-tl__org">{e.org}</p>
            <ul>
              {(cap ? e.points.slice(0, cap) : e.points).map((pt) => (
                <li key={pt} dangerouslySetInnerHTML={{ __html: pt }} />
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
