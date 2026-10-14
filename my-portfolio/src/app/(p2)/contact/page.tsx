import type { Metadata } from "next";
import { contact, sections, services, skills } from "@/app/portfolio-content/site-content";
import Faq from "../_parts/Faq";
import GetInTouch from "../_parts/GetInTouch";
import PageIntro from "../_parts/PageIntro";
import SectionHead from "../_parts/SectionHead";
import Ticker from "../_parts/Ticker";
import { CtaBand } from "../_parts/Sections";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send a short brief and get back an approach, an honest estimate and a start date. Email, WhatsApp or the form — open to freelance projects and full-time roles.",
  alternates: { canonical: "/contact" },
};

const ticker = [...services.map((s) => s.title), ...skills.map((s) => s.group)];

/* What a brief needs to contain for the first reply to be useful. */
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
 * Contact — their page runs: banner · ticker · LET'S TALK (a contact
 * form) · GET IN TOUCH (detail rows + map) · FAQs · closing CTA. This
 * had only the first two plus the cards.
 *
 * The LET'S TALK form is deliberately not reproduced. Form wiring is
 * outside the scope you set for this layout, and a second, non-submitting
 * copy of the form that lives on layout 1 would silently swallow real
 * enquiries. The LET'S TALK slot carries the contact cards instead, and
 * every route out of this page is a live mailto, tel, or WhatsApp link.
 */
export default function P2Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Contact page"
        title={sections.contact.title}
        lede={contact.body}
      />
      <Ticker items={ticker} />

      {/* ── Let's talk ──
          Their form's slot. Rather than a decorative copy of it, this
          asks for the same four things a brief form would, so the first
          reply can be a real answer instead of a round of questions. */}
      <section className="p2-sec" id="contact">
        <div className="p2-split">
          {/* Plain div, not p2-split__l: that class pushes the foot to the
              bottom of the column, and the checklist opposite is tall
              enough here that it opened a dead 150px hole under the
              heading. */}
          <div>
            <SectionHead eyebrow="Let’s talk" title="Have a project in mind?" />
            <div className="p2-about__foot">
              {/* Not contact.body again — the banner above carries it. */}
              <p className="p2-lede">
                Email reaches me directly — no agency, no account manager, no
                ticket queue.
              </p>
              <a className="p2-btn" href={`mailto:${contact.inbox}`}>
                Send an email <span aria-hidden="true">&#8599;</span>
              </a>
            </div>
          </div>

          <ul className="p2-brief">
            {BRIEF.map((b) => (
              <li key={b.k}>
                <span className="p2-brief__k">{b.k}</span>
                <p>{b.v}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Get in touch ── */}
      <section className="p2-sec p2-sec--tint">
        <GetInTouch />
      </section>

      {/* ── FAQs ── */}
      <section className="p2-sec">
        <Faq />
      </section>

      <CtaBand
        title="Tell me what you’re building"
        cta={{ label: "Send an email", href: `mailto:${contact.inbox}` }}
      />
    </>
  );
}
