import type { Metadata } from "next";
import Link from "next/link";
import { education, experience, identity } from "@/app/portfolio-content/site-content";
import {
  CtaBand,
  Head,
  PageIntro,
  SkillGrid,
  StatGrid,
  Timeline,
} from "../_parts/Blocks";

export const metadata: Metadata = { title: "Resume" };

export default function Resume() {
  return (
    <>
      <PageIntro
        n="Resume"
        title="Nine years, four roles, one straight line."
        lede="From a Peshawar bootcamp to production AI voice systems — the track record behind the pitch."
        actions={
          <>
            <a className="x-btn x-btn--ink" href={identity.cvUrl} download>
              Download CV <span aria-hidden="true">↓</span>
            </a>
            <Link className="x-btn x-btn--line" href="/demo-2/contact">
              Get in touch
            </Link>
          </>
        }
      />

      {/* Full bullet lists here — no `cap` — because this is the page
          someone opens when they actually want the detail. */}
      <section className="x-sec x-sec--flush">
        <div className="x-wrap">
          <Head
            n="01"
            kicker="Experience"
            title="Where the work has been."
          />
          <Timeline items={experience} />
        </div>
      </section>

      <section className="x-sec x-sec--sink">
        <div className="x-wrap">
          <Head
            n="02"
            kicker="Track record"
            title="The numbers behind it."
            lede="Each figure names its own source — the platform, the stack and the year."
          />
          <StatGrid />
        </div>
      </section>

      <section className="x-sec">
        <div className="x-wrap">
          <Head
            n="03"
            kicker="Technical skills"
            title="What I work in, day to day."
            lede="Every item here is evidenced by a shipped project on this site, not a list of things once read about."
          />
          <SkillGrid />
        </div>
      </section>

      <section className="x-sec x-sec--sink">
        <div className="x-wrap">
          <Head n="04" kicker="Education" title="Qualifications." />
          <Timeline items={education} />
        </div>
      </section>

      <CtaBand
        title="Want the full CV as a file?"
        body="The PDF carries the same record as this page, formatted for an ATS."
        cta={{ label: "Start a project", href: "/demo-2/contact" }}
      />
    </>
  );
}
