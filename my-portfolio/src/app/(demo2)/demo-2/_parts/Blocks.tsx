import Image from "next/image";
import Link from "next/link";
import {
  processSteps,
  projects,
  services,
  skills,
  stats,
  testimonials,
  testimonialsAreSamples,
} from "@/app/portfolio-content/site-content";
import { Counter, Reveal } from "./Motion";

/* ── Section head ──────────────────────────────────────────────────
   A numbered index in the margin, a kicker, the heading, and an
   optional action opposite. The index is real document structure —
   these sections are read in order — not a decorative motif. */
export function Head({
  n,
  kicker,
  title,
  lede,
  action,
}: {
  n: string;
  kicker: string;
  title: string;
  lede?: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className={`x-head${action ? " x-head--row" : ""}`}>
      <span className="x-head__n">{n}</span>
      <div className="x-head__t">
        <span className="x-kick">{kicker}</span>
        <h2>{title}</h2>
        {lede ? <p className="x-head__lede">{lede}</p> : null}
      </div>
      {action ? (
        <Link className="x-lnk" href={action.href}>
          {action.label} <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </div>
  );
}

/* ── Page banner ───────────────────────────────────────────────────
   Every inner page opens on the same shape, so the six read as one
   document rather than six separately-designed pages. */
export function PageIntro({
  n,
  title,
  lede,
  actions,
}: {
  n: string;
  title: string;
  lede: string;
  actions?: React.ReactNode;
}) {
  return (
    <section className="x-intro">
      <div className="x-intro__in">
        <span className="x-intro__n">{n}</span>
        <div>
          <h1>{title}</h1>
          <p>{lede}</p>
          {actions ? <div className="x-acts">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}

/* ── Closing band ──────────────────────────────────────────────────
   The one dark surface in the system. It ends every page, so it also
   does the job of a visual full stop. */
export function CtaBand({
  title = "Tell me what you’re building.",
  body = "Send a short brief — you get back an approach, an honest estimate and a start date.",
  cta = { label: "Start a project", href: "/demo-2/contact" },
}: {
  title?: string;
  body?: string;
  cta?: { label: string; href: string };
} = {}) {
  return (
    <section className="x-cta">
      <div className="x-cta__in">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="x-acts">
          {/* Anything not starting with "/" leaves the router and needs
              a plain anchor — mailto: in particular. */}
          {cta.href.startsWith("/") ? (
            <Link className="x-btn x-btn--ink" href={cta.href}>
              {cta.label} <span aria-hidden="true">→</span>
            </Link>
          ) : (
            <a className="x-btn x-btn--ink" href={cta.href}>
              {cta.label} <span aria-hidden="true">→</span>
            </a>
          )}
          <Link className="x-btn x-btn--line" href="/demo-2/work">
            See the work
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Work ──────────────────────────────────────────────────────────
   Sara has no screenshot — she answers a phone line, there is nothing
   to photograph — so her bed draws the signal rather than faking a
   mockup or showing an empty grey box. */
const PLATE = [22, 38, 30, 52, 44, 74, 62, 88, 70, 56, 46, 34, 26];

export function WorkGrid({
  items = projects,
  full = false,
}: {
  items?: typeof projects;
  full?: boolean;
}) {
  return (
    <div className="x-grid">
      {items.map((p, i) => (
        <Reveal key={p.title} delay={(i % 3) * 80}>
          <article className="x-tile">
            <div className="x-tile__shot">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`Screenshot of the ${p.title} interface`}
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                />
              ) : (
                <span className="x-plate" aria-hidden="true">
                  {PLATE.map((v, n) => (
                    <i
                      key={n}
                      className={v > 60 ? "hi" : undefined}
                      style={{ height: `${v}%` }}
                    />
                  ))}
                </span>
              )}
              <span className="x-tile__tag">{p.category.split(" · ")[0]}</span>
            </div>
            <div className="x-tile__body">
              <h3>{p.title}</h3>
              {/* Clamped by LINES on the preview, not cut at the first
                  em-dash — that split gave wildly uneven summaries
                  ("A decoupled build" next to a full sentence) because
                  it depends on where each description happens to
                  punctuate. Three lines is even across every card. */}
              <p className={full ? undefined : "x-clamp"}>{p.body}</p>
              {p.note ? <p className="x-tile__note">{p.note}</p> : null}
              <div className="x-tile__foot">
                <span className="x-tile__tech">{p.tech}</span>
                {p.href ? (
                  p.href.startsWith("/") ? (
                    <Link className="x-lnk" href={p.href}>
                      {p.linkLabel ?? "Watch demo"}{" "}
                      <span aria-hidden="true">→</span>
                    </Link>
                  ) : (
                    <a
                      className="x-lnk"
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.linkLabel ?? "Watch demo"}{" "}
                      <span aria-hidden="true">↗</span>
                    </a>
                  )
                ) : null}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* ── Services ──────────────────────────────────────────────────────
   `detail` prints the full capability list — the Services page wants
   it, the home preview does not. */
export function ServiceCards({ detail = false }: { detail?: boolean } = {}) {
  return (
    <div className="x-grid">
      {services.map((s, i) => (
        <Reveal key={s.no} delay={i * 90}>
          <article className="x-svc">
            <span className="x-svc__n">{s.no}</span>
            <h3>{s.title}</h3>
            <p className="x-svc__sub">{s.sub}</p>
            <p>{s.body}</p>
            {detail ? (
              <ul>
                {s.capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            ) : null}
            <Link className="x-lnk" href="/demo-2/contact">
              Enquire <span aria-hidden="true">→</span>
            </Link>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* ── Numbers ───────────────────────────────────────────────────────
   Every figure names its own source in `stats` — an unsourced number
   reads as marketing, and these are all checkable. */
export function StatGrid() {
  return (
    <div className="x-stats">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 80}>
          <article className="x-stat">
            <b>
              <Counter to={s.value} suffix={s.unit} />
            </b>
            <h4>{s.label}</h4>
            <p dangerouslySetInnerHTML={{ __html: s.source }} />
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* The timeline moved to its own client component — its rows light as
   they reach reading position, which needs an observer. Re-exported
   here so pages keep importing everything from one place. */
export { default as Timeline } from "./Timeline";

export function SkillGrid() {
  return (
    <div className="x-skills">
      {skills.map((s, i) => (
        <Reveal key={s.group} delay={i * 70}>
          <div>
            <h4>{s.group}</h4>
            <ul className="x-chips">
              {s.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function ProcessSteps() {
  return (
    <div className="x-steps">
      {processSteps.map((p, i) => (
        <Reveal key={p.title} delay={i * 80}>
          <article className="x-step">
            <b>{String(p.n).padStart(2, "0")}</b>
            <h4>{p.title}</h4>
            <p>{p.body}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* ── Reviews ───────────────────────────────────────────────────────
   Runs on the testimonials mechanism in site-content: the invented
   samples show in `npm run dev` behind a loud warning and are stripped
   from production builds, so the section is simply absent on a live
   site until real, permitted quotes exist. */
function Stars({ n }: { n: number }) {
  return (
    <span className="x-rev__stars" aria-label={`${n} out of 5`}>
      <span aria-hidden="true">★★★★★</span>
      <i aria-hidden="true" style={{ width: `${(n / 5) * 100}%` }}>
        ★★★★★
      </i>
    </span>
  );
}

export function Reviews({ limit }: { limit?: number } = {}) {
  if (testimonials.length === 0) return null;
  const list = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <>
      <div className="x-revs">
        {list.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 80}>
            <article className="x-rev">
              <Stars n={t.stars} />
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <footer>
                <b>{t.name}</b>
                <span>
                  {t.role}, {t.company} · {t.date}
                </span>
              </footer>
            </article>
          </Reveal>
        ))}
      </div>
      {testimonialsAreSamples ? (
        <p className="x-warn">
          ⚠ Sample quotes — these people and companies are invented. They render
          in development only and are stripped from the production build. Real
          quotes added to site-content replace them everywhere.
        </p>
      ) : null}
    </>
  );
}
