import Image from "next/image";
import Link from "next/link";
import { FiLayout, FiMic, FiServer, FiTerminal } from "react-icons/fi";
import {
  about,
  clients,
  contact,
  education,
  experience,
  identity,
  pricing,
  projects,
  rating,
  services,
  skills,
  stats,
  testimonials,
  testimonialsAreSamples,
} from "@/app/portfolio-content/site-content";
import type { Testimonial } from "@/app/portfolio-content/site-content";
import aboutPortrait from "@/assets/portrait-2.jpg";
import Reveal from "./Reveal";
import SliderDots from "./SliderDots";
import SectionHead from "./SectionHead";
import ServiceIcon from "./ServiceIcon";
import ToolIcon from "./ToolIcon";
import VoiceWave from "./VoiceWave";

export const shots = projects.filter((p) => p.image);

/* ── Hero — home page only ───────────────────────────────────────── */
export function Hero() {
  return (
    <section className="p2-hero">
      <Reveal as="div" dir="up" className="p2-hero__l">
        <h1>{identity.tagline}</h1>
        <p>{identity.intro}</p>
        {/* Solid proof strip: the numbers get their own cells instead of
            hiding inside a sentence. All three come from `stats`, the one
            place those figures are sourced. */}
        <ul className="p2-hero__proof">
          <li>
            <b>{stats[2]!.value}{stats[2]!.unit}</b>
            <span>{stats[2]!.label}</span>
          </li>
          <li>
            <b>{stats[3]!.value}{stats[3]!.unit}</b>
            <span>{stats[3]!.label}</span>
          </li>
          <li>
            <b>{stats[1]!.value}{stats[1]!.unit}</b>
            <span>{stats[1]!.label}</span>
          </li>
        </ul>
        <div className="p2-acts">
          <Link className="p2-btn" href="/work">
            View work <span aria-hidden="true">&#8599;</span>
          </Link>
          <Link className="p2-btn p2-btn--line" href="/contact">
            Contact me <span aria-hidden="true">&#8599;</span>
          </Link>
        </div>
      </Reveal>

      {/* fadeInRight, not fadeInUp — this column is the aside next to
          the pitch, not a continuation of it, matching the reference's
          own left/right split between its two hero columns. */}
      <Reveal as="div" dir="right" delay={150} className="p2-hero__r">
        <div className="p2-hero__mid">
          <div className="p2-hero__shot">
            <Image
              src={identity.portrait}
              alt={`${identity.fullName}, ${identity.role}`}
              placeholder="blur"
              sizes="(max-width: 1000px) 100vw, 30vw"
            />
          </div>

          <div className="p2-hero__cards">
            <div className="p2-card p2-card--accent">
              <span className="p2-card__k">Based in</span>
              <b>{identity.location}</b>
            </div>
            <div className="p2-card p2-card--dark">
              <span className="p2-card__k">Worked with</span>
              <ul className="p2-chips">
                {clients.map((c) => (
                  <li key={c.name}>
                    {c.name}
                    {c.tag ? <em>{c.tag}</em> : null}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p2-card p2-card--line">
              <b>
                {stats[0]!.value}
                <i>{stats[0]!.unit}</i>
              </b>
              <span className="p2-card__k">{stats[0]!.label}</span>
            </div>
          </div>
        </div>

        <div className="p2-hero__spec">
          <span>Specializing in</span>
          <ul>
            {skills.map((s) => (
              <li key={s.group}>{s.group}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

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

/* ── Services grid ───────────────────────────────────────────────── */
/**
 * Their services grid, measured: bordered 434×300 cells in one flush
 * run, each with a small number badge at the top-left, a large 150px
 * line icon, a 19.2px/600 title, a line of copy, and a 51×51 lime arrow
 * button pinned to the bottom-right. The first cell is not a service —
 * it is a black intro panel carrying copy and a lime button.
 *
 * The black intro panel their grid leads with is deliberately dropped —
 * its button duplicated the "All 3 services" link in the section head.
 *
 * `detail` prints each service's capability list — the page wants the
 * full detail, the home preview does not.
 */
export function ServicesGrid({ detail = false }: { detail?: boolean } = {}) {
  return (
    <>
    <div className="p2-svc-grid">
      {services.map((s, i) => (
        <Reveal
          as="article"
          dir="up"
          delay={i * 100}
          className="p2-svc"
          key={s.no}
        >
          <span className="p2-svc__no">{s.no}</span>
          <span className="p2-svc__art" aria-hidden="true">
            <ServiceIcon title={s.title} />
          </span>
          <div className="p2-svc__body">
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            {detail ? (
              <ul>
                {s.capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            ) : null}
          </div>
          <Link
            className="p2-svc__go"
            href="/contact"
            aria-label={`Enquire about ${s.title}`}
          >
            <span aria-hidden="true">&#8599;</span>
          </Link>
        </Reveal>
      ))}
    </div>
    <SliderDots />
    </>
  );
}

/* ── Work grid ────────────────────────────────────────────────────── */
export function WorkGrid({ items = projects }: { items?: typeof projects }) {
  return (
    <div className="p2-work-grid">
      {items.map((p, i) => (
          <Reveal
            as="article"
            dir="up"
            delay={(i % 3) * 100}
            className="p2-tile"
            key={p.title}
          >
            <div className="p2-tile__shot">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`Screenshot of the ${p.title} interface`}
                  placeholder="blur"
                  sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
                />
              ) : (
                <VoiceWave />
              )}
              <span className="p2-tile__pill p2-tile__pill--accent">
                {p.category.split(" · ")[0]}
              </span>
              {p.href ? (
                <a
                  className="p2-tile__go"
                  href={p.href}
                  aria-label={`Open ${p.title}`}
                  {...(p.href.startsWith("/")
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                >
                  &#8599;
                </a>
              ) : null}
            </div>
            <div className="p2-tile__cap">
              <h4>{p.title}</h4>
              <p>{p.tech}</p>
            </div>
          </Reveal>
      ))}
    </div>
  );
}

/* ── Resume block ─────────────────────────────────────────────────── */
export function ResumeBlock() {
  return (
    <>
      <h3 className="p2-sub">Experience</h3>
      <ul className="p2-tools p2-tools--cv">
        {experience.map((e) => (
          <li key={e.title}>
            <span className="p2-tools__mark" aria-hidden="true" />
            <div>
              <span className="p2-cv__when">{e.period}</span>
              <b>{e.title}</b>
              <p className="p2-cv__org">{e.org}</p>
              <ul>
                {e.points.slice(0, 2).map((pt) => (
                  <li key={pt} dangerouslySetInnerHTML={{ __html: pt }} />
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="p2-sub">Education</h3>
      <ul className="p2-tools p2-tools--cv">
        {education.map((e) => (
          <li key={e.title}>
            <span className="p2-tools__mark" aria-hidden="true" />
            <div>
              <span className="p2-cv__when">{e.period}</span>
              <b>{e.title}</b>
              <p className="p2-cv__org">{e.org}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

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
            Every figure below names where it came from — the platform, the
            stack and the year. No unsourced numbers.
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

/* ── Why choose ───────────────────────────────────────────────────
   Their black WHY CHOOSE NORTH section, measured: lime-filled badge,
   40px white heading with the lede opposite, then a 2×2 grid cut by
   1px hairlines into quadrants — each a 52px lime number chip beside
   a 40px outline icon, a 24px white title and a muted line, with the
   right-hand pair mirrored and a 325×300 photo sitting on the cross.
   The quadrants carry the four skill groups — the same data the About
   page's Strengths cards use, which is the reference's own pattern of
   repeating an About block on home. */
const WHY_ICONS = [FiServer, FiLayout, FiMic, FiTerminal];

/* v3: one plain line under each title, so a visitor reads what the
   discipline delivers before the tool names. Same order as `skills`. */
const WHY_NOTES = [
  "APIs, data models and auth, built to run in production.",
  "Typed, fast interfaces, from design to deploy.",
  "Voice agents that answer live phone calls.",
  "Containers, pipelines and cloud hosting.",
];

/* "SQLAlchemy · Alembic" is one entry in `skills`; as chips each tool
   stands alone, so the pairs are split on their own dot. */
const whyTools = (items: string[]) => items.flatMap((it) => it.split(" · "));

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
            Everything a build needs, from one engineer — no handoffs, no gaps,
            and the same stack on every project on this site.
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
        {/* Header row owns the call to action; each tile is its own link
            with a caption, so nothing is drawn on top of a screenshot. */}
        <div className="p2-why__work">
          <div className="p2-why__work-head">
            <div>
              <span className="p2-why__work-k">Selected work</span>
              <p>The same stack, shipped on real projects.</p>
            </div>
            <Link className="p2-why__work-cta" href="/work">
              See all projects <span aria-hidden="true">&#8599;</span>
            </Link>
          </div>
          <ul className="p2-why__work-grid">
            <li>
              <Link href="/work/sara" className="p2-why__work-tile">
                <span className="p2-why__work-art p2-why__work-art--voice" aria-hidden="true">
                  <FiMic />
                  <span className="p2-why__sig__wave">
                    {[40, 70, 100, 65, 90, 50].map((h, n) => (
                      <i key={n} style={{ height: `${h}%` }} />
                    ))}
                  </span>
                </span>
                <span className="p2-why__work-cap">Sara — AI Voice Agent</span>
              </Link>
            </li>
            {["VIN Wear Automations", "Headless Commerce Platform", "Duomada Skylights"]
              .map((t) => shots.find((x) => x.title === t)!)
              .map((s) => (
              <li key={s.title}>
                <Link href="/work" className="p2-why__work-tile">
                  <span className="p2-why__work-art">
                    <Image src={s.image!} alt="" width={320} height={200} />
                  </span>
                  <span className="p2-why__work-cap">{s.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ── Pricing ──────────────────────────────────────────────────────
   Their three 420px cards under a centred head, middle card black.
   Differences are deliberate: no dollar figures (none exist — a null
   price renders "Custom · quoted per scope", see `pricing` in
   site-content) and no "BEST SELLER" tag (an unverifiable sales
   claim); the middle card keeps the visual emphasis only. Each card
   is one of the three real services, capabilities and all. */
export function PricingBlock() {
  return (
    <>
      {/* Same head as Works: title left, one-line intro on the right. It
          was the only centred head on the page. */}
      <div className="p2-split p2-split--head">
        <SectionHead eyebrow="Pricing" title="Priced to the project, not the hour" />
        <p className="p2-lede">
          Every job is quoted against a written scope before it starts — send
          the brief, get a number and a timeline back.
        </p>
      </div>
      <div className="p2-price-grid">
        {pricing.map((t, i) => {
          const s = services[t.service];
          return (
            <Reveal
              as="article"
              dir="up"
              delay={i * 100}
              className={`p2-price${t.featured ? " p2-price--dark" : ""}`}
              key={s.title}
            >
              <div className="p2-price__in">
                <h5>{s.title}</h5>
                <p className="p2-price__sub">{s.sub}</p>
                <div className="p2-price__fig">
                  {t.price ? (
                    <>
                      <b>{t.price}</b>
                      <span>{t.per}</span>
                    </>
                  ) : (
                    <>
                      <b>Custom</b>
                      <span>quoted per scope</span>
                    </>
                  )}
                </div>
                <span className="p2-price__lbl">Includes:</span>
                <ul>
                  {s.capabilities.slice(0, 4).map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              {/* Full-width flush bar, not an inline button inside the
                  card's own padding — checked live: their CHOOSE strip
                  runs edge to edge along the card's bottom border. */}
              <a
                className="p2-price__cta"
                href={`mailto:${contact.inbox}?subject=${encodeURIComponent(`${s.title} — project enquiry`)}`}
              >
                Get a quote <span aria-hidden="true">&#8599;</span>
              </a>
            </Reveal>
          );
        })}
      </div>
      <SliderDots />
    </>
  );
}

/* ── Reviews ──────────────────────────────────────────────────────
   Their REVIEWS band: score rail · black featured quote · two bordered
   quotes. Runs on the testimonials mechanism in site-content — the
   invented samples show in `npm run dev` with a visible warning and are
   stripped from production builds, so the whole section returns null
   on the live site until real quotes exist. Their featured card has a
   client photo; we have no client photos, so the quote takes the room. */
function Stars({ n }: { n: number }) {
  return (
    <span className="p2-stars" aria-label={`${n} out of 5`}>
      <span aria-hidden="true">★★★★★</span>
      <span
        className="p2-stars__on"
        aria-hidden="true"
        style={{ width: `${(n / 5) * 100}%` }}
      >
        ★★★★★
      </span>
    </span>
  );
}

/* Profile image for a quote. A real photo (`photo` in site-content,
   published with the person's permission) when there is one; otherwise
   the person's initials on a coloured tile. The invented sample people
   never get a face — a stock photo would make a placeholder look like
   a real client. */
function initialsOf(name: string) {
  const parts = name.trim().split(/\s+/);
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return ((parts[0]?.[0] ?? "") + last).toUpperCase();
}

function Avatar({ t, i, size = 48 }: { t: Testimonial; i: number; size?: number }) {
  if (t.photo) {
    return (
      <Image
        className="p2-ava"
        src={t.photo}
        alt={t.name}
        width={size}
        height={size}
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <span
      className={`p2-ava p2-ava--${"abc"[i % 3]}`}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.36) }}
      aria-hidden="true"
    >
      {initialsOf(t.name)}
    </span>
  );
}

/* v3: the rail is a card of its own (score, stars, a stack of the
   people quoted, the CTA); the featured quote is large with the
   person's picture beside their name; every card below carries the
   rating as a number, the date, and the person with their picture. */
export function ReviewsBlock() {
  if (testimonials.length === 0) return null;
  const [first, ...rest] = testimonials;
  const stack = testimonials.slice(0, 5);
  return (
    <section className="p2-sec" id="reviews">
      <div className="p2-split p2-split--head">
        <SectionHead eyebrow="Reviews" title="What clients say about the work" />
        <p className="p2-lede">
          Real quotes only, published with each client&rsquo;s permission —
          which is why this section stays empty until there are some.
        </p>
      </div>

      <div className="p2-rev">
        <Reveal as="div" dir="up" className="p2-rev__rail">
          {rating ? (
            <div className="p2-rev__sum">
              <p className="p2-rev__score">
                <b>{rating.score}</b>
                <span>/5</span>
              </p>
              <Stars n={rating.score} />
              <p className="p2-rev__from">
                Averaged from {rating.count} reviews
              </p>
            </div>
          ) : null}
          <div className="p2-rev__stack">
            <span className="p2-rev__faces">
              {stack.map((t, i) => (
                <Avatar key={t.name} t={t} i={i} size={42} />
              ))}
              {testimonials.length > stack.length ? (
                <span
                  className="p2-ava p2-ava--more"
                  style={{ width: 42, height: 42 }}
                  aria-hidden="true"
                >
                  +{testimonials.length - stack.length}
                </span>
              ) : null}
            </span>
            <span className="p2-rev__count">
              <b>{testimonials.length}</b> client quotes on this page
            </span>
          </div>
          <Link className="p2-btn" href="/contact">
            Start a project <span aria-hidden="true">&#8599;</span>
          </Link>
        </Reveal>

        <Reveal as="article" dir="up" delay={100} className="p2-rev__hero">
          <span className="p2-rev__mark" aria-hidden="true">
            &rdquo;
          </span>
          <div className="p2-rev__row">
            <span className="p2-rev__rate">
              <Stars n={first.stars} />
              <b>{first.stars.toFixed(1)}</b>
            </span>
            <span className="p2-rev__date">{first.date}</span>
          </div>
          <blockquote>&ldquo;{first.quote}&rdquo;</blockquote>
          <footer className="p2-rev__who">
            <Avatar t={first} i={0} size={64} />
            <span className="p2-rev__id">
              <b>{first.name}</b>
              <span>
                {first.role}, {first.company}
              </span>
            </span>
          </footer>
        </Reveal>
      </div>

      {/* The rest as a grid, not a 330px column capped at two — that
          silently dropped whichever quotes ran past the second slot.
          A grid holds however many `testimonials` carries without
          anything going missing when a third real quote arrives. */}
      {rest.length > 0 ? (
        <div className="p2-rev-grid">
          {rest.map((t, i) => (
            <Reveal
              as="article"
              dir="up"
              delay={(i % 3) * 100}
              className="p2-rev__card"
              key={t.name}
            >
              <div className="p2-rev__row">
                <span className="p2-rev__rate">
                  <Stars n={t.stars} />
                  <b>{t.stars.toFixed(1)}</b>
                </span>
                <span className="p2-rev__date">{t.date}</span>
              </div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <footer className="p2-rev__who">
                <Avatar t={t} i={i + 1} size={48} />
                <span className="p2-rev__id">
                  <b>{t.name}</b>
                  <span>
                    {t.role}, {t.company}
                  </span>
                </span>
              </footer>
            </Reveal>
          ))}
        </div>
      ) : null}
      {rest.length > 0 ? <SliderDots /> : null}

      {testimonialsAreSamples ? (
        <p className="p2-rev__note">
          ⚠ Sample quotes — these people and companies are invented. They
          render in dev only and are stripped from the production build;
          real quotes added to site-content replace them everywhere.
        </p>
      ) : null}
    </section>
  );
}

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
          Four areas I work across end to end — the same four that show up in
          every project on this site.
        </p>
      </div>

      <div className="p2-strength-grid">
        {skills.map((s, i) => (
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
            <span className="p2-strength__icon" aria-hidden="true" />
            <h4>{s.group}</h4>
            <p>{s.items.join(" · ")}</p>
          </Reveal>
        ))}
      </div>
      <SliderDots />
    </>
  );
}

/* ── Closing CTA ──────────────────────────────────────────────────
   Black band, 64px white heading (same size as the hero H1 — measured),
   lime button on the right. */
export function CtaBand({
  title = "Let’s build something that stays live",
  cta = { label: "Start a project", href: "/contact" },
}: {
  title?: string;
  cta?: { label: string; href: string };
} = {}) {
  /* The Contact page ends with this band too, but pointing it back at
     /portfolio-2/contact would land the reader where they already are —
     so it takes a mailto there instead. Anything not starting with "/"
     leaves the router and needs a plain anchor. */
  const inner = (
    <>
      {cta.label} <span aria-hidden="true">&#8599;</span>
    </>
  );
  return (
    <section className="p2-cta">
      <h2>{title}</h2>
      {cta.href.startsWith("/") ? (
        <Link className="p2-btn p2-btn--lime" href={cta.href}>
          {inner}
        </Link>
      ) : (
        <a className="p2-btn p2-btn--lime" href={cta.href}>
          {inner}
        </a>
      )}
    </section>
  );
}
