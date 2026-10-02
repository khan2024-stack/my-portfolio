import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { about, education, identity } from "@/app/portfolio-content/site-content";
import {
  CtaBand,
  Head,
  PageIntro,
  SkillGrid,
  StatGrid,
  Timeline,
} from "../_parts/Blocks";
import { Reveal } from "../_parts/Motion";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <PageIntro
        n="About"
        title="One engineer, end to end."
        lede="Who I am, how I work, and the record behind both — sourced, dated and checkable."
        actions={
          <>
            <a className="x-btn x-btn--ink" href={identity.cvUrl} download>
              Download CV <span aria-hidden="true">↓</span>
            </a>
            <Link className="x-btn x-btn--line" href="/demo-2/work">
              See the work
            </Link>
          </>
        }
      />

      {/* ── Narrative ──
          The bio runs as a proper measure beside the portrait rather
          than as a wall of text — 66ch is where long-form stays
          readable, and the photo confirms the person the page is
          about instead of decorating it. */}
      <section className="x-sec x-sec--flush">
        <div className="x-wrap">
          <Head n="01" kicker="About me" title={identity.fullName} />
          <div
            className="x-grid x-grid--2"
            style={{ alignItems: "start", gap: 56 }}
          >
            <Reveal>
              <div className="x-prose">
                {about.paragraphs.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="x-hero__shot" style={{ aspectRatio: "4 / 5" }}>
                <Image
                  src={identity.portrait}
                  alt={`${identity.fullName}, ${identity.role}`}
                  placeholder="blur"
                  sizes="(max-width: 1000px) 100vw, 45vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Facts ── */}
      <section className="x-sec x-sec--sink">
        <div className="x-wrap">
          <Head
            n="02"
            kicker="Details"
            title="The particulars."
            lede="Everything a client usually asks in the first email."
          />
          <dl className="x-facts">
            {about.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="x-sec">
        <div className="x-wrap">
          <Head
            n="03"
            kicker="Tools I use"
            title="Four disciplines, one person."
            lede="Everything a build needs, from one engineer — no handoffs, no gaps, and the same stack on every project on this site."
          />
          <SkillGrid />
        </div>
      </section>

      {/* ── Numbers ──
          Repeated from home deliberately: this is the page a visitor
          lands on from a CV link, and the figures should not require a
          second click to find. */}
      <section className="x-sec x-sec--sink">
        <div className="x-wrap">
          <Head
            n="04"
            kicker="Track record"
            title="Results from real projects."
            lede="Every figure names where it came from. No unsourced numbers."
          />
          <StatGrid />
        </div>
      </section>

      {/* ── Education ── */}
      <section className="x-sec">
        <div className="x-wrap">
          <Head n="05" kicker="Education" title="Where it started." />
          <Timeline items={education} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
