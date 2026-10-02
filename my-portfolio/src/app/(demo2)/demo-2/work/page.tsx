import type { Metadata } from "next";
import Link from "next/link";
import { clients, projects, sections } from "@/app/portfolio-content/site-content";
import { CtaBand, Head, PageIntro, Reviews } from "../_parts/Blocks";
import { Reveal } from "../_parts/Motion";
import WorkFilter from "../_parts/WorkFilter";

export const metadata: Metadata = { title: "Work" };

export default function Work() {
  return (
    <>
      <PageIntro
        n="Work"
        title={sections.work.title}
        lede={`${projects.length} projects — commerce platforms, an AI voice agent taking real calls, and client sites in production today.`}
        actions={
          <Link className="x-btn x-btn--ink" href="/demo-2/contact">
            Start a project <span aria-hidden="true">→</span>
          </Link>
        }
      />

      {/* Filterable, with the surviving cards animating to their new
          positions rather than snapping — see WorkFilter.tsx. */}
      <section className="x-sec x-sec--flush">
        <div className="x-wrap">
          <Head
            n="01"
            kicker="Selected projects"
            title="Every one of these is live or has shipped."
            lede="No concepts, no unbuilt mockups. Where there is a public site or a recorded demo, the card links straight to it."
          />
          <WorkFilter />
        </div>
      </section>

      {/* ── Clients ──
          Names only, and every one already appears in the resume or the
          grid above. It says who trusted the work — not what they
          thought of it, which is what the reviews are for. */}
      <section className="x-sec x-sec--sink">
        <div className="x-wrap">
          <Head
            n="02"
            kicker="Worked with"
            title="Who the work was for."
            lede="Named clients only. Each one appears elsewhere on this site with the project attached."
          />
          <Reveal>
            <ul className="x-chips" style={{ marginTop: 40 }}>
              {clients.map((c) => (
                <li key={c.name}>
                  {c.name} · {c.place}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="x-sec">
        <div className="x-wrap">
          <Head
            n="03"
            kicker="Reviews"
            title="What clients say about the work."
            lede="Real quotes only, published with each client’s permission."
          />
          <Reveal>
            <Reviews />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
