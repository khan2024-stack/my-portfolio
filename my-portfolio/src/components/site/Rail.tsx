"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * A paged horizontal rail.
 *
 * The controls are the reference's second carousel — not its opening
 * banner: a pair of small solid squares sitting bottom-left under the
 * track (their `owl-btn-bottom-left`, 28×35), dots beside them, and a
 * count. The banner slider is a different thing and stays where it is.
 *
 * The track itself is a scroll-snap container rather than a transformed
 * strip, so trackpad swipe, touch drag, keyboard and a screen reader's
 * own scrolling all work without any of it being written here — the
 * buttons only page it by one viewport width.
 */
export default function Rail({
  label,
  active = true,
  children,
}: {
  label: string;
  /** False while the rail sits inside a `hidden` tab panel. */
  active?: boolean;
  children: React.ReactNode;
}) {
  const view = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);

  /* A page is one viewport plus the gap that follows it, not one
     viewport. Scrolling by the viewport alone lands slightly short of
     the next card and scroll-snap has to correct it; the error compounds
     with every page. */
  const stride = (el: HTMLElement) =>
    el.clientWidth + (parseFloat(getComputedStyle(el).columnGap) || 0);

  const measure = useCallback(() => {
    const el = view.current;
    /* clientWidth is 0 while the tab panel is `hidden`. Bail rather than
       computing a page count of Infinity — the ResizeObserver fires
       again the moment the panel is shown. */
    if (!el || !el.clientWidth) return;
    const s = stride(el);
    setPages(Math.max(1, Math.ceil((el.scrollWidth - el.clientWidth) / s) + 1));
    setPage(Math.round(el.scrollLeft / s));
  }, []);

  /* `active` in the dependency list, not a ResizeObserver on its own.
     A rail inside a `hidden` panel has no box to measure, and the
     observer's catch-up notification when the panel is shown is tied to
     the rendering lifecycle — which a background tab does not run. The
     Education rail lost its controls entirely that way. The parent knows
     which tab is open, so it says so. */
  useEffect(() => {
    const el = view.current;
    if (!el || !active) return;
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure, active]);

  const to = (n: number) => {
    const el = view.current;
    if (!el) return;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: n * stride(el), behavior: calm ? "instant" : "smooth" });
  };

  return (
    <div className="rail">
      <div
        className="rail__view"
        ref={view}
        onScroll={measure}
        tabIndex={0}
        role="group"
        aria-label={label}
      >
        {children}
      </div>

      {pages > 1 && (
        <div className="rail__nav">
          <button
            className="rail__btn"
            onClick={() => to(page - 1)}
            disabled={page === 0}
            aria-label={`${label}: previous`}
          >
            &#8249;
          </button>
          <button
            className="rail__btn"
            onClick={() => to(page + 1)}
            disabled={page >= pages - 1}
            aria-label={`${label}: next`}
          >
            &#8250;
          </button>

          <span className="rail__dots">
            {Array.from({ length: pages }, (_, n) => (
              <button
                key={n}
                className={n === page ? "is-on" : undefined}
                onClick={() => to(n)}
                aria-current={n === page}
                aria-label={`${label}: page ${n + 1} of ${pages}`}
              />
            ))}
          </span>

          <span className="rail__count">
            {page + 1} / {pages}
          </span>
        </div>
      )}
    </div>
  );
}
