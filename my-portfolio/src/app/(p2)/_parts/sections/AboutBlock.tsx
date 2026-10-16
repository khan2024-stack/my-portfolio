import Image from "next/image";
import Link from "next/link";
import aboutPortrait from "@/assets/portrait-desk.jpg";
import Reveal from "../Reveal";
import SectionHead from "../SectionHead";
import ToolIcon from "../ToolIcon";
import {
  about,
  identity,
  skills,
} from "@/app/portfolio-content/site-content";

/* ── About block ──────────────────────────────────────────────────── */
/* No <section> wrapper on any block below — the caller owns the
   <section> (and its padding/tint/id), so the same block can sit inside
   a full page section or a lighter home-page teaser without stacking
   two section boxes on top of each other. */
/**
 * `cta` swaps only the button. Their home page and their About page run
 * the SAME core block — measured at 679px tall on both — and the only
 * thing that differs is the button: "LEARN MORE" on home (pointing at
 * the full page) versus the page's own action. Duplicating the block
 * would let the two drift apart.
 */
export function AboutBlock({
  cta = { label: "Learn more", href: "/about" },
}: {
  cta?: { label: string; href: string; download?: boolean };
} = {}) {
  return (
    <div className="p2-about">
      {/* Text and CTA — left column, matching the reference's own
          three-across order: copy, portrait, then the list. */}
      {/* Two groups, not four loose children: the column is
          `justify-content: space-between` (measured on the reference),
          so the badge+heading pin to the top and the copy+button drop to
          the bottom. Without the grouping, space-between would spread
          all four apart evenly instead. */}
      <Reveal as="div" dir="left" className="p2-about__in">
        <SectionHead eyebrow="About me" title={identity.fullName} />
        <div className="p2-about__foot">
          <p
            className="p2-lede"
            dangerouslySetInnerHTML={{ __html: about.paragraphs[0] }}
          />
          {/* A plain <a download> for the CV (next/link won't trigger a
              file download); next/link for real routes. */}
          {cta.download ? (
            <a className="p2-btn" href={cta.href} download>
              {cta.label} <span aria-hidden="true">&#8599;</span>
            </a>
          ) : (
            <Link className="p2-btn" href={cta.href}>
              {cta.label} <span aria-hidden="true">&#8599;</span>
            </Link>
          )}
        </div>
      </Reveal>

      {/* The PORTRAIT, not a project screenshot. The reference's middle
          column is a photograph of the person the page is about — this
          was pointing at `shots[0]`, a laptop mockup, which is the one
          thing that made the block read as something other than an
          about section. */}
      <Reveal as="div" dir="up" delay={100} className="p2-about__shot">
        {/* A second photo, not identity.portrait again — the hero already
            uses that one, and the same face twice on one screen reads as
            a reused asset. */}
        <Image
          src={aboutPortrait}
          alt={`Portrait of ${identity.fullName}`}
          placeholder="blur"
          sizes="(max-width: 900px) 100vw, 30vw"
        />
      </Reveal>

      {/* Skills — the third column, running the full height beside the
          portrait rather than stacked below the whole row. */}
      <Reveal as="div" dir="right" delay={200} className="p2-about__tools">
        <h3>Tools I use</h3>
        <ul className="p2-tools">
          {skills.map((s) => (
            <li key={s.group}>
              <ToolIcon group={s.group} />
              <div>
                <b>{s.group}</b>
                <p>{s.items.join(" · ")}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
