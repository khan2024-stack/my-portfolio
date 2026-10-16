import Reveal from "../Reveal";
import SliderDots from "../SliderDots";
import {
  skills,
  stats,
} from "@/app/portfolio-content/site-content";
import { WHY_ICONS, WHY_NOTES, whyTools } from "./why-data";

/* ── Why choose ───────────────────────────────────────────────────
   Their black WHY CHOOSE NORTH section, measured: lime-filled badge,
   40px white heading with the lede opposite, then a 2×2 grid cut by
   1px hairlines into quadrants — each a 52px lime number chip beside
   a 40px outline icon, a 24px white title and a muted line, with the
   right-hand pair mirrored and a 325×300 photo sitting on the cross.
   The quadrants carry the four skill groups — the same data the About
   page's Strengths cards use, which is the reference's own pattern of
   repeating an About block on home. */
export function WhyChooseBlock() {
  return (
    <section className="p2-why">
      <div className="p2-split p2-split--head">
        <Reveal as="div" dir="up" className="p2-head">
          <span className="p2-badge p2-badge--lime">
            <span className="p2-badge__dot" aria-hidden="true" />
            Why work with me
          </span>
          <h2>
            Four disciplines, <em>one person</em>
          </h2>
        </Reveal>
        <Reveal as="div" dir="up" delay={100} className="p2-why__side">
          <p className="p2-lede">
            Backend, frontend, AI and infrastructure from one engineer — no
            handoffs, no gaps, and one person accountable from the first commit
            to live traffic.
          </p>
        </Reveal>
      </div>

      {/* The track-record figures, moved here from their own section on
          the home page: four sourced numbers in one row. Same `stats`
          the About page's Achievements block reads. */}
      <div className="p2-why__stats">
        {stats.map((s, i) => (
          <Reveal
            as="div"
            dir="up"
            delay={i * 80}
            className="p2-why__stat"
            key={s.label}
          >
            <b>
              {s.value}
              <i>{s.unit}</i>
            </b>
            <h5>{s.label}</h5>
            <p dangerouslySetInnerHTML={{ __html: s.source }} />
          </Reveal>
        ))}
      </div>

      <div className="p2-why-grid">
        <div className="p2-why-cells">
        {skills.map((s, i) => {
          const Icon = WHY_ICONS[i % WHY_ICONS.length];
          const no = String(i + 1).padStart(2, "0");
          return (
            <Reveal
              as="article"
              dir={i % 2 ? "right" : "left"}
              delay={Math.floor(i / 2) * 120}
              className={`p2-why__cell${i % 2 ? " p2-why__cell--r" : ""}`}
              key={s.group}
            >
              <span className="p2-why__ghost" aria-hidden="true">
                {no}
              </span>
              <div className="p2-why__top">
                <span className="p2-why__tile">
                  <Icon className="p2-why__icon" aria-hidden="true" />
                </span>
                <span className="p2-why__no">
                  {no} / {String(skills.length).padStart(2, "0")}
                </span>
              </div>
              <h4>{s.group}</h4>
              <p>{WHY_NOTES[i % WHY_NOTES.length]}</p>
              <ul className="p2-why__tags">
                {whyTools(s.items).map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
          );
        })}
        </div>
        <SliderDots />
        {/* The reference fills the cross with one stock photo; this is a
            2×2 curated to represent the actual spread of the work — the
            two 2025 UK builds, one Fenzacci-era commerce build, and Sara.
            Sara has no screenshot (she answers a phone line, there's
            nothing to photograph), so slicing by "most recent" silently
            dropped the one project this whole section is arguing for —
            AI & Voice is one of the four quadrants beside it. Her cell
            draws the same waveform WorkGrid already uses for her, at
            collage scale, rather than leaving voice work unrepresented. */}
      </div>
    </section>
  );
}
