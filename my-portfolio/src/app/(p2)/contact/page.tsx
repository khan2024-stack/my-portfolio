import type { Metadata } from "next";
import { contact, sections, services, skills } from "@/app/portfolio-content/site-content";
import Faq from "../_parts/Faq";
import ContactLayout from "../_parts/ContactLayout";
import PageIntro from "../_parts/PageIntro";
import Ticker from "../_parts/Ticker";
import { CtaBand } from "../_parts/Sections";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send a short brief and get back an approach, an honest estimate and a start date. Email, WhatsApp or the form — available for freelance projects.",
  alternates: { canonical: "/contact" },
};

const ticker = [...services.map((s) => s.title), ...skills.map((s) => s.group)];

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
        eyebrow="Contact"
        title={sections.contact.title}
        lede={contact.body}
      />
      <Ticker items={ticker} />

      <section className="p2-sec" id="contact">
        <ContactLayout />
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
