import Link from "next/link";
import Reveal from "../Reveal";
import SectionHead from "../SectionHead";
import {
  stats,
} from "@/app/portfolio-content/site-content";

/* The four-card contact strip that used to live here is gone: it printed
   the same email / phone / based / works values that the Contact page's
   GET IN TOUCH rows now carry, one section further down. */

/* ── Achievements ─────────────────────────────────────────────────
   Their About page runs this after the about block: a left column
   (badge, 52.8px heading, copy, button) beside a 2×2 grid of bordered
   cells, each with a lime figure, a bold name and a line of detail.
   The stats map onto it exactly — value+unit as the lime figure, the
   label as the name, and the sourced note as the detail. Every number
   here already carries its own provenance in site-content, which is
   what the reference fills with lorem. */
export function AchievementsBlock() {
  return (
    <div className="p2-split">
      <div className="p2-split__l">
        <SectionHead eyebrow="Track record" title="Results from real projects" />
        <div className="p2-about__foot">
          <p className="p2-lede">
            Each number below comes from a named project.
          </p>
          <Link className="p2-btn" href="/work">
            See the work <span aria-hidden="true">&#8599;</span>
          </Link>
        </div>
      </div>

      <div className="p2-award-grid">
        {stats.map((s, i) => (
          <Reveal
            as="article"
            dir="up"
            delay={i * 100}
            className="p2-award"
            key={s.label}
          >
            <span className="p2-tools__mark" aria-hidden="true" />
            <b className="p2-award__fig">
              {s.value}
              {s.unit}
            </b>
            <h4>{s.label}</h4>
            <p dangerouslySetInnerHTML={{ __html: s.source }} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
