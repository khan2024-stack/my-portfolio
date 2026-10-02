import type { Metadata } from "next";
import Link from "next/link";
import { saraCase } from "@/app/portfolio-content/sara-case";
import { identity } from "@/app/portfolio-content/site-content";

export const metadata: Metadata = {
  /* Bare title — the (p2) layout template appends "| Muhammad Sajjad". */
  title: "Sara — AI voice phone agent",
  description:
    "How a bilingual English and Gulf Arabic phone agent was built for live inbound sales calls — the latency budget, the pipeline, and 95% across 255 automated assertions.",
};

/**
 * The one project with somewhere to go. Everything else in the work grid
 * is a summary; this is the page that shows the reasoning behind one of
 * them. Server component — nothing here is interactive.
 */
export default function SaraCase() {
  const c = saraCase;

  return (
    <div className="wrap">
      <article className="cs">
        <header className="cs__head">
          {/* /work is a real page in this design, not a home anchor. */}
          <Link className="cs__back" href="/work">
            <span className="arw">←</span> All work
          </Link>

          <p className="eyebrow tagline">{c.eyebrow}</p>
          <h1>{c.title}</h1>
          <p className="cs__stand">{c.standfirst}</p>

          <dl className="cs__meta">
            <div>
              <dt>Client</dt>
              <dd>{c.client}</dd>
            </div>
            <div>
              <dt>Period</dt>
              <dd>{c.period}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{c.role}</dd>
            </div>
          </dl>
        </header>

        {/* Same card language as the home page: accent bar, figure,
            label, then the count the figure came from. */}
        <div className="cs__figs">
          {c.figures.map((f) => (
            <div className="stat rv" key={f.label}>
              <span className="stat__v">
                <b>{f.value}</b>
              </span>
              <span className="stat__k">{f.label}</span>
              <span
                className="stat__src"
                dangerouslySetInnerHTML={{ __html: f.note }}
              />
            </div>
          ))}
        </div>

        <div className="cs__body">
          {c.sections.map((s) => (
            <section className="cs__sec rv" key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </section>
          ))}
        </div>

        <section className="cs__stack rv">
          <h2>Stack</h2>
          <div className="skills">
            {c.stack.map((g) => (
              <div className="skill" key={g.group}>
                <span>{g.group}</span>
                <ul>
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <footer className="cs__foot rv">
          <p>
            Building something that needs to answer a phone, or anything
            else on this list? {identity.shortName} is taking on select
            projects.
          </p>
          <Link className="btn btn--fill" href="/#contact">
            Start a project <span className="arw">→</span>
          </Link>
        </footer>
      </article>
    </div>
  );
}
