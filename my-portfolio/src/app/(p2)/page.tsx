import type { Metadata } from "next";
import Link from "next/link";
import { sections, services, skills } from "@/app/portfolio-content/site-content";
import GetInTouch from "./_parts/GetInTouch";
import Recognition from "./_parts/Recognition";
import SectionHead from "./_parts/SectionHead";
import Ticker from "./_parts/Ticker";
import {
  AboutBlock,
  CtaBand,
  Hero,
  PricingBlock,
  ReviewsBlock,
  ServicesGrid,
  WhyChooseBlock,
} from "./_parts/Sections";
import WorkShowcase from "./_parts/WorkShowcase";

export const metadata: Metadata = {
  title: "Muhammad Sajjad | Full Stack & AI Engineer",
};

const ticker = [...services.map((s) => s.title), ...skills.map((s) => s.group)];

/**
 * Home — their section order, measured off the reference:
 *   header · hero · ticker · ABOUT ME · MY WORKS · SERVICES · …
 *
 * The About section here is the CORE block only — the same three-column
 * summary their home carries (679px tall on both their home and their
 * About page), not the full About page. The extra blocks that page
 * adds (achievements, strengths, closing CTA) stay on /about, and the
 * button here points there rather than repeating them.
 *
 * This replaces two teaser cards that were my own invention and have no
 * counterpart on the reference.
 */
export default function Portfolio2() {
  return (
    <>
      <Hero />
      <Ticker items={ticker} />

      {/* ── About (core only) ── */}
      <section className="p2-sec" id="about">
        <AboutBlock cta={{ label: "Learn more", href: "/about" }} />
      </section>

      {/* ── Recognition ── first position + credentials, early. */}
      <Recognition />

      {/* ── Work preview ──
          Six project cards, three to a row; the rest sit behind "See all".
          Head: title left, one short intro right. */}
      <section className="p2-sec p2-sec--tint" id="work">
        <div className="p2-split p2-split--head">
          <SectionHead eyebrow="My works" title={sections.work.title} />
          <p className="p2-lede">
            A Shopify automation, an AI voice agent taking live calls, and
            commerce sites for clients in the UAE, UK and USA.
          </p>
        </div>
        <WorkShowcase />
      </section>

      {/* ── Services preview ──
          Cards only. The reference leads its grid with a black intro
          panel, but its "Learn more" duplicated the "All 3 services"
          link already sitting in the section head, and dropping it lets
          the three cards fill the row evenly. Capability lists stay on
          the Services page. */}
      <section className="p2-sec" id="services">
        <div className="p2-split p2-split--head">
          <SectionHead eyebrow="Services" title={sections.services.title} />
          <div className="p2-head__side">
            <p className="p2-lede">
              Three focused offers — web platforms, AI and voice systems, and
              automation — each scoped and quoted in writing.
            </p>
            <Link className="p2-link" href="/services">
              All {services.length} services <span aria-hidden="true">&#8599;</span>
            </Link>
          </div>
        </div>
        <ServicesGrid />
      </section>

      {/* ── Why choose ──
          Their black WHY CHOOSE NORTH band. Full-bleed, carries its own
          <section>. */}
      <WhyChooseBlock />

      {/* ── Pricing ──
          No real rates exist yet, so every card reads "Custom · quoted
          per scope" — set figures in `pricing` in site-content and they
          take the slot. */}
      <section className="p2-sec" id="pricing">
        <PricingBlock />
      </section>

      {/* ── Numbers ──
          No section of its own on home any more: the four figures sit
          as one row inside the Why band above (see WhyChooseBlock), so
          the landing page keeps them without the extra height. The full
          Achievements block still runs on the About page. */}

      {/* ── Reviews ──
          Renders the invented dev samples with a warning banner; in a
          production build the whole section is null until real quotes
          land in site-content. */}
      <ReviewsBlock />

      {/* ── FAQs ──
          Not on home any more, it made the landing page too long. The
          same block still runs on /contact and /work. */}

      {/* ── Get in touch ──
          Their own home does not carry this — it ends FAQs · Blogs · CTA.
          It is here because every other page's core block gets a home
          preview, and this is the one a reader is looking for at the
          end of the page. The Contact page's LET'S TALK brief and its
          own FAQs stay on /contact. */}
      <section className="p2-sec p2-sec--tint" id="contact">
        <GetInTouch />
      </section>

      {/* ── Closing CTA ──
          Home was the only page without one. */}
      <CtaBand />
    </>
  );
}
