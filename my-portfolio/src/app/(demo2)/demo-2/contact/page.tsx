import type { Metadata } from "next";
import { about, contact, identity, sections } from "@/app/portfolio-content/site-content";
import { CtaBand, Head, PageIntro } from "../_parts/Blocks";
import { Reveal } from "../_parts/Motion";

export const metadata: Metadata = { title: "Contact" };

const fact = (label: string) => about.facts.find((f) => f.label === label)?.value;
const detail = (label: string) => contact.details.find((d) => d.label === label);

const phone = detail("Phone");
/* about.facts lists the same +971 number under both "Phone" and
   "WhatsApp", so one row carries both rather than printing it twice. */
const isWhatsApp = fact("WhatsApp") === phone?.value;

const REACH = [
  {
    k: "Email",
    v: contact.inbox,
    href: `mailto:${contact.inbox}`,
    cta: "Send an email",
  },
  {
    k: isWhatsApp ? "Phone / WhatsApp" : "Phone",
    v: phone?.value ?? "",
    href: phone?.href ?? undefined,
    cta: "Call",
  },
  { k: "Location", v: identity.location },
  { k: "Works", v: detail("Works")?.value ?? "" },
  { k: "Availability", v: fact("Freelance") ?? "" },
  { k: "Languages", v: fact("Languages") ?? "" },
].filter((r) => r.v);

/* What a brief needs to contain for the first reply to be a real
   answer rather than a round of questions. */
const BRIEF = [
  {
    k: "What you’re building",
    v: "A paragraph is plenty — the product, who uses it, and what it has to do.",
  },
  {
    k: "What already exists",
    v: "A repo, a live site, designs, an old system being replaced, or nothing yet.",
  },
  {
    k: "The date you’re working to",
    v: "A launch, a demo, a funding milestone. Even an approximate one shapes the plan.",
  },
  {
    k: "A budget range",
    v: "Rough is fine. It decides scope, and it saves us both a round of guessing.",
  },
];

/**
 * Contact.
 *
 * No form. Form wiring is outside the scope set for this build, and a
 * second non-submitting copy of the form that lives on the main
 * portfolio would silently swallow real enquiries — which is worse
 * than not having one. Every route off this page is a live mailto,
 * tel or WhatsApp link instead.
 */
export default function Contact() {
  const waHref = phone?.value
    ? `https://wa.me/${phone.value.replace(/\D/g, "")}`
    : null;

  return (
    <>
      <PageIntro
        n="Contact"
        title={sections.contact.title}
        lede={contact.body}
        actions={
          <>
            <a className="x-btn x-btn--ink" href={`mailto:${contact.inbox}`}>
              Send an email <span aria-hidden="true">→</span>
            </a>
            {isWhatsApp && waHref ? (
              <a
                className="x-btn x-btn--line"
                href={waHref}
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </a>
            ) : null}
          </>
        }
      />

      {/* ── Reach ── */}
      <section className="x-sec x-sec--flush">
        <div className="x-wrap">
          <Head
            n="01"
            kicker="Get in touch"
            title="Reach me directly."
            lede="No agency in between, no account manager, no ticket queue."
          />
          <ul className="x-reach">
            {REACH.map((r) => (
              <li key={r.k}>
                <span className="x-reach__k">{r.k}</span>
                {r.href ? (
                  <a className="x-reach__v" href={r.href}>
                    {r.v}
                  </a>
                ) : (
                  <span className="x-reach__v">{r.v}</span>
                )}
                {r.href ? (
                  <a className="x-lnk" href={r.href}>
                    {r.cta} <span aria-hidden="true">→</span>
                  </a>
                ) : (
                  <span />
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Brief ── */}
      <section className="x-sec x-sec--sink">
        <div className="x-wrap">
          <Head
            n="02"
            kicker="Before you write"
            title="Four things worth including."
            lede="Send these and the first reply can be an actual approach and estimate, rather than a list of questions back."
          />
          <Reveal>
            <ul className="x-brief">
              {BRIEF.map((b) => (
                <li key={b.k}>
                  <b>{b.k}</b>
                  <p>{b.v}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── What happens next ── */}
      <section className="x-sec">
        <div className="x-wrap">
          <Head
            n="03"
            kicker="What happens next"
            title="Three steps, no surprises."
          />
          <div className="x-steps">
            <article className="x-step">
              <b>01</b>
              <h4>You send the brief</h4>
              <p>A short description of what you&rsquo;re building.</p>
            </article>
            <article className="x-step">
              <b>02</b>
              <h4>I come back with a plan</h4>
              <p>
                How I&rsquo;d approach it, roughly what it takes, and when I
                could start.
              </p>
            </article>
            <article className="x-step">
              <b>03</b>
              <h4>Scope is agreed</h4>
              <p>Timeline and cost written down before any code.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Points at a mailto, not back at /contact — the reader is
          already here. */}
      <CtaBand
        title="Tell me what you’re building."
        body={contact.body}
        cta={{ label: "Send an email", href: `mailto:${contact.inbox}` }}
      />
    </>
  );
}
