"use client";

import { useRef, useState } from "react";
import {
  about,
  education,
  experience,
  sections,
  skills,
} from "@/app/portfolio-content/site-content";
import Rail from "./Rail";
import SectionHead from "./SectionHead";

type Entry = {
  period: string;
  duration: string;
  title: string;
  org: string;
  points: string[];
};

/**
 * Experience and education run on a rail rather than as one tall stacked
 * block. Two cards to a view, paged with the reference's bottom-left
 * controls.
 *
 * The timeline reads left to right now, so the connector does too: each
 * card carries a hairline running out of its node to the card edge, and
 * the four together read as one sequence across the track.
 */
function Timeline({
  entries,
  label,
  active,
}: {
  entries: Entry[];
  label: string;
  active: boolean;
}) {
  return (
    /* `rv` sits on the rail, not on the cards. A card parked off to the
       right of a scroll container never intersects the viewport, so a
       reveal on the card itself would leave it permanently at opacity 0
       until it happened to be paged into view. */
    <Rail label={label} active={active}>
      {entries.map((e) => (
        <article className="tl" key={`${e.period}-${e.title}`}>
          <div className="tl__when">
            <b>{e.period}</b>
            <span>{e.duration}</span>
          </div>
          <h3>{e.title}</h3>
          <p className="tl__org">{e.org}</p>
          <ul>
            {e.points.map((point) => (
              <li key={point}>
                <i>→</i>
                <span dangerouslySetInnerHTML={{ __html: point }} />
              </li>
            ))}
          </ul>
        </article>
      ))}
    </Rail>
  );
}

const TABS = [
  { id: "exp", label: "Experience" },
  { id: "edu", label: "Education" },
  { id: "skl", label: "Technical Skills" },
  { id: "abt", label: "About Me" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function Resume() {
  const [active, setActive] = useState<TabId>("exp");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  /* Arrow keys move between tabs, as a tablist should. */
  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const moves: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: TABS.length - 1,
    };
    const target = moves[e.key];
    if (target === undefined) return;

    e.preventDefault();
    const next = TABS[(target + TABS.length) % TABS.length];
    setActive(next.id);
    tabRefs.current[next.id]?.focus();
  };

  return (
    <section className="sec" id="resume">
      <SectionHead {...sections.resume} />

      <div className="tabs" role="tablist" aria-label="Resume sections">
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[tab.id] = el;
            }}
            className="tab"
            role="tab"
            id={`t-${tab.id}`}
            aria-controls={`p-${tab.id}`}
            aria-selected={active === tab.id}
            tabIndex={active === tab.id ? 0 : -1}
            onClick={() => setActive(tab.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="panel"
        role="tabpanel"
        id="p-exp"
        aria-labelledby="t-exp"
        hidden={active !== "exp"}
      >
        <Timeline
          entries={experience}
          label="Experience"
          active={active === "exp"}
        />
      </div>

      <div
        className="panel"
        role="tabpanel"
        id="p-edu"
        aria-labelledby="t-edu"
        hidden={active !== "edu"}
      >
        <Timeline
          entries={education}
          label="Education"
          active={active === "edu"}
        />
      </div>

      <div
        className="panel"
        role="tabpanel"
        id="p-skl"
        aria-labelledby="t-skl"
        hidden={active !== "skl"}
      >
        <div className="skills">
          {skills.map((s) => (
            <div className="skill rv" key={s.group}>
              <span>{s.group}</span>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className="panel"
        role="tabpanel"
        id="p-abt"
        aria-labelledby="t-abt"
        hidden={active !== "abt"}
      >
        <div className="about">
          <div>
            {about.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>

          <dl className="about__facts">
            {about.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
