"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/portfolio-content/site-content";

/**
 * Filterable work grid with a real FLIP transition.
 *
 * Filtering a grid is easy; filtering it so the surviving cards GLIDE
 * to their new positions instead of teleporting is the part that has
 * no plugin. The technique is First-Last-Invert-Play:
 *
 *   First   — measure every card's box before the filter changes.
 *   Last    — let React re-render, then measure again in a layout
 *             effect (before the browser paints).
 *   Invert  — transform each card back to where it just was.
 *   Play    — animate that transform away.
 *
 * The browser never paints the intermediate state, so a card that
 * moves from column 3 row 1 to column 1 row 1 appears to slide there.
 * Cards that are newly present fade and scale in instead, since they
 * have no previous box to travel from.
 *
 * Animations run on the Web Animations API — no library, and the
 * compositor handles the transform.
 */

const PLATE = [22, 38, 30, 52, 44, 74, 62, 88, 70, 56, 46, 34, 26];
const ALL = "All work";

export default function WorkFilter() {
  /* Categories come from the projects themselves — adding a project
     with a new category adds its filter automatically, with no second
     list to keep in sync. */
  const cats = useMemo(() => {
    const seen: string[] = [];
    for (const p of projects) {
      const c = p.category.split(" · ")[0];
      if (!seen.includes(c)) seen.push(c);
    }
    return [ALL, ...seen];
  }, []);

  const [active, setActive] = useState(ALL);
  const gridRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<Map<string, DOMRect>>(new Map());

  const shown = useMemo(
    () =>
      active === ALL
        ? projects
        : projects.filter((p) => p.category.split(" · ")[0] === active),
    [active],
  );

  /* FIRST — snapshot every card's box while the old set is still on
     screen. Must run in the click handler, before setState. */
  const snapshot = () => {
    const m = new Map<string, DOMRect>();
    gridRef.current
      ?.querySelectorAll<HTMLElement>("[data-k]")
      .forEach((el) => m.set(el.dataset.k!, el.getBoundingClientRect()));
    firstRef.current = m;
  };

  /* LAST + INVERT + PLAY — useLayoutEffect, not useEffect: this has to
     run after the DOM updates but before the browser paints, or the
     cards flash into their new positions first and the animation plays
     from the wrong place. */
  useLayoutEffect(() => {
    const grid = gridRef.current;
    const first = firstRef.current;
    if (!grid || first.size === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    grid.querySelectorAll<HTMLElement>("[data-k]").forEach((el) => {
      const was = first.get(el.dataset.k!);
      const now = el.getBoundingClientRect();

      if (!was) {
        el.animate(
          [
            { opacity: 0, transform: "scale(.96)" },
            { opacity: 1, transform: "none" },
          ],
          { duration: 320, easing: "cubic-bezier(.22,.61,.36,1)" },
        );
        return;
      }

      const dx = was.left - now.left;
      const dy = was.top - now.top;
      if (dx === 0 && dy === 0) return;

      el.animate(
        [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }],
        { duration: 460, easing: "cubic-bezier(.22,.61,.36,1)" },
      );
    });

    firstRef.current = new Map();
  }, [active]);

  return (
    <>
      <div className="x-filter" role="tablist" aria-label="Filter work">
        {cats.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={c === active}
            className={c === active ? "on" : undefined}
            onClick={() => {
              if (c === active) return;
              snapshot();
              setActive(c);
            }}
          >
            {c}
          </button>
        ))}
        <span className="x-filter__c">
          {shown.length} of {projects.length}
        </span>
      </div>

      <div className="x-grid" ref={gridRef}>
        {shown.map((p) => (
          <article className="x-tile" key={p.title} data-k={p.title}>
            <div className="x-tile__shot">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`Screenshot of the ${p.title} interface`}
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                />
              ) : (
                <span className="x-plate" aria-hidden="true">
                  {PLATE.map((v, n) => (
                    <i
                      key={n}
                      className={v > 60 ? "hi" : undefined}
                      style={{ height: `${v}%` }}
                    />
                  ))}
                </span>
              )}
              <span className="x-tile__tag">{p.category.split(" · ")[0]}</span>
            </div>
            <div className="x-tile__body">
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              {p.note ? <p className="x-tile__note">{p.note}</p> : null}
              <div className="x-tile__foot">
                <span className="x-tile__tech">{p.tech}</span>
                {p.href ? (
                  p.href.startsWith("/") ? (
                    <Link className="x-lnk" href={p.href}>
                      {p.linkLabel ?? "Watch demo"}{" "}
                      <span aria-hidden="true">→</span>
                    </Link>
                  ) : (
                    <a
                      className="x-lnk"
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.linkLabel ?? "Watch demo"}{" "}
                      <span aria-hidden="true">↗</span>
                    </a>
                  )
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
