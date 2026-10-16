import Reveal from "../Reveal";
import SliderDots from "../SliderDots";
import SectionHead from "../SectionHead";
import {
  skills,
} from "@/app/portfolio-content/site-content";
import { WHY_ICONS, WHY_NOTES } from "./why-data";

/* ── Strengths ────────────────────────────────────────────────────
   Their four numbered cards, one per skill group. Their version ends
   each card with a percentage bar; that is a self-assessed proficiency
   score and this site has no such data, so inventing one would be
   fabricating a credential. The card keeps the number, the mark, the
   title and the real stack list instead. */
export function StrengthsBlock() {
  return (
    <>
      <div className="p2-split p2-split--head">
        <SectionHead eyebrow="My strengths" title="What I bring to a build" />
        <p className="p2-lede">
          Four disciplines I deliver end to end, so a build never waits on a
          handoff.
        </p>
      </div>

      <div className="p2-strength-grid">
        {skills.map((s, i) => {
          const Icon = WHY_ICONS[i % WHY_ICONS.length];
          return (
            <Reveal
              as="article"
              dir="up"
              delay={i * 100}
              className="p2-strength"
              key={s.group}
            >
              <span className="p2-strength__no">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="p2-strength__icon" aria-hidden="true">
                <Icon />
              </span>
              <h4>{s.group}</h4>
              {/* The note, not the tool list — "Tools I use" one screen up
                  already carries every tool name. */}
              <p>{WHY_NOTES[i % WHY_NOTES.length]}</p>
            </Reveal>
          );
        })}
      </div>
      <SliderDots />
    </>
  );
}
