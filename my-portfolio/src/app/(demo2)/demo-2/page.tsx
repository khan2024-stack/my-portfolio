import Image from "next/image";
import Link from "next/link";
import {
  about,
  experience,
  identity,
  projects,
  sections,
  services,
} from "@/app/portfolio-content/site-content";
import {
  CtaBand,
  Head,
  Reviews,
  ServiceCards,
  StatGrid,
  Timeline,
  WorkGrid,
} from "./_parts/Blocks";
import { Reveal } from "./_parts/Motion";
import SignalStrip from "./_parts/SignalStrip";

const freelance = about.facts.find((f) => f.label === "Freelance")?.value;

/**
 * Home — the landing page for the demo build.
 *
 * Sections are numbered because the page is genuinely a sequence: who,
 * proof, work, offer, record, word-of-mouth, contact. The index in the
 * margin is document structure, not a motif.
 *
 * The signal strip under the hero is the one computed element on the
 * page — see SignalStrip.tsx. Everything else is real content out of
 * site-content, so the live portfolio and this demo can never drift.
 */
export default function Demo2Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="x-hero">
        <div className="x-hero__in">
          <div className="x-hero__top">
            {/* The hero hangs off the same margin rail every section
                index uses, so the whole document aligns to one edge. */}
            <span className="x-hero__n">00</span>
            <div>
              <span className="x-kick">
                {freelance ?? "Available for freelance"}
              </span>
              <h1>
                I build web platforms and <em>AI agents that ship</em>.
              </h1>
              <p className="x-hero__lede">{identity.intro}</p>
              <div className="x-acts">
                <Link className="x-btn x-btn--ink" href="/demo-2/work">
                  See the work <span aria-hidden="true">→</span>
                </Link>
                <Link className="x-btn x-btn--line" href="/demo-2/contact">
                  Start a project
                </Link>
              </div>
            </div>

            <div className="x-hero__shot">
              <Image
                src={identity.portrait}
                alt={`${identity.fullName}, ${identity.role}`}
                placeholder="blur"
                sizes="(max-width: 1000px) 260px, 300px"
              />
            </div>
          </div>

          <dl className="x-spec">
            <div>
              <dt>Based in</dt>
              <dd>{identity.location}</dd>
            </div>
            <div>
              <dt>Works</dt>
              <dd>Remote · UAE · UK</dd>
            </div>
            <div>
              <dt>Building since</dt>
              <dd>2017</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Full stack · AI voice</dd>
            </div>
          </dl>

          {/* ── Live signal ──
              A running chart-recorder trace, computed per frame. It is
              here because the AI voice work is the thing that most
              needs showing rather than describing — and because a
              theme cannot produce it. */}
          <div className="x-strip">
            <div className="x-strip__bar">
              <span className="x-strip__live">
                <i />
                Live signal
              </span>
              <span>Formant envelope · 44 bands · 60fps</span>
              <span className="x-strip__hint">Move your pointer over it</span>
            </div>
            <SignalStrip />
          </div>
        </div>
      </section>

      {/* ── Work ── */}
      <section className="x-sec">
        <div className="x-wrap">
          <Head
            n="01"
            kicker="Selected work"
            title={sections.work.title}
            lede={`${projects.length} projects — commerce platforms, an AI voice agent taking live calls, and client sites in production today.`}
            action={{ label: "All work", href: "/demo-2/work" }}
          />
          <WorkGrid items={projects.slice(0, 3)} />
        </div>
      </section>

      {/* ── Services ── */}
      <section className="x-sec x-sec--sink">
        <div className="x-wrap">
          <Head
            n="02"
            kicker="Services"
            title={sections.services.title}
            lede="Three offers, not six that blur into each other — a client reading them can tell which one to ask for."
            action={{
              label: `All ${services.length} services`,
              href: "/demo-2/services",
            }}
          />
          <ServiceCards />
        </div>
      </section>

      {/* ── Numbers ── */}
      <section className="x-sec">
        <div className="x-wrap">
          <Head
            n="03"
            kicker="Track record"
            title="Results from real projects."
            lede="Every figure names where it came from — the platform, the stack and the year. No unsourced numbers."
          />
          <StatGrid />
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="x-sec x-sec--sink">
        <div className="x-wrap">
          <Head
            n="04"
            kicker="Experience"
            title="Nine years, one straight line."
            lede="From a Peshawar bootcamp to production AI voice systems."
            action={{ label: "Full resume", href: "/demo-2/resume" }}
          />
          {/* Two most recent roles, two bullets each — the page is a
              preview, the Resume page carries every point. */}
          <Timeline items={experience.slice(0, 2)} cap={2} />
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="x-sec">
        <div className="x-wrap">
          <Head
            n="05"
            kicker="Reviews"
            title="What clients say about the work."
            lede="Real quotes only, published with each client’s permission — which is why this section stays empty until there are some."
          />
          <Reveal>
            <Reviews limit={3} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
