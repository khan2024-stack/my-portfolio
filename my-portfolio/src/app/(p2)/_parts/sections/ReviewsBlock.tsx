import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";
import SliderDots from "../SliderDots";
import SectionHead from "../SectionHead";
import {
  rating,
  testimonials,
  testimonialsAreSamples,
} from "@/app/portfolio-content/site-content";
import type { Testimonial } from "@/app/portfolio-content/site-content";

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

/* "Role, Company" when the client gave both, else "Project · Country". */
function byline(t: Testimonial) {
  return t.role && t.company
    ? `${t.role}, ${t.company}`
    : [t.project, t.country].filter(Boolean).join(" · ");
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
          Feedback from the people I&rsquo;ve built for, published with their
          permission.
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
            {first.date ? <span className="p2-rev__date">{first.date}</span> : null}
          </div>
          <blockquote>&ldquo;{first.quote}&rdquo;</blockquote>
          <footer className="p2-rev__who">
            <Avatar t={first} i={0} size={64} />
            <span className="p2-rev__id">
              <b>{first.name}</b>
              <span>{byline(first)}</span>
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
                {t.date ? <span className="p2-rev__date">{t.date}</span> : null}
              </div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <footer className="p2-rev__who">
                <Avatar t={t} i={i + 1} size={48} />
                <span className="p2-rev__id">
                  <b>{t.name}</b>
                  <span>{byline(t)}</span>
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
