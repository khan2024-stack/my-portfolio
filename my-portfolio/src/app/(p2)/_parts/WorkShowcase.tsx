"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/portfolio-content/site-content";
import VoiceWave from "./VoiceWave";

/**
 * Their home Works section, measured: one large featured image on the
 * left carrying a lime year pill, outline tag pills and a white arrow
 * button, with a vertical list of project names on the right — 55px
 * bordered rows, 20px apart, the selected one filled #DFDBCE — and a
 * black "View more" button under the list.
 *
 * Selecting a name swaps the featured image, which is why this is a
 * client component. The Work PAGE keeps the plain grid; this is the
 * home preview only.
 */
export default function WorkShowcase({
  items = projects.slice(0, 4),
}: {
  items?: typeof projects;
}) {
  const [active, setActive] = useState(0);
  const current = items[active]!;

  return (
    <div className="p2-show">
      <div className="p2-show__stage">
        {current.image ? (
          <Image
            key={current.title}
            src={current.image}
            alt={`Screenshot of the ${current.title} interface`}
            placeholder="blur"
            sizes="(max-width: 1000px) 100vw, 56vw"
          />
        ) : (
          <VoiceWave />
        )}

        <div className="p2-show__pills">
          {/* The lime pill is their year. These carry the project's real
              category instead — this site has no per-project year. */}
          <span className="p2-show__pill p2-show__pill--accent">
            {current.category.split(" · ")[0]}
          </span>
          {current.tech
            .split(" · ")
            .slice(0, 2)
            .map((t) => (
              <span className="p2-show__pill" key={t}>
                {t}
              </span>
            ))}
        </div>

        {current.href ? (
          <a
            className="p2-show__go"
            href={current.href}
            aria-label={`Open ${current.title}`}
            {...(current.href.startsWith("/")
              ? {}
              : { target: "_blank", rel: "noopener noreferrer" })}
          >
            <span aria-hidden="true">&#8599;</span>
          </a>
        ) : null}
      </div>

      <div className="p2-show__side">
        {/* A real tablist: arrow keys move between projects and the
            selected row is announced, rather than six unlabelled
            buttons that only work with a mouse. */}
        <div className="p2-show__list" role="tablist" aria-label="Selected projects">
          {items.map((p, i) => (
            <button
              key={p.title}
              role="tab"
              aria-selected={i === active}
              className={i === active ? "is-on" : undefined}
              onClick={() => setActive(i)}
            >
              {p.title}
            </button>
          ))}
        </div>

        <Link className="p2-btn" href="/work">
          View more <span aria-hidden="true">&#8599;</span>
        </Link>
      </div>
    </div>
  );
}
