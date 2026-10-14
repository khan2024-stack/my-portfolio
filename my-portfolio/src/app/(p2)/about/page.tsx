import type { Metadata } from "next";

import exhibition from "@/assets/exhibition-2019.jpg";
import PageIntro from "../_parts/PageIntro";
import Ticker from "../_parts/Ticker";
import {
  AboutBlock,
  AchievementsBlock,
  CtaBand,
  StrengthsBlock,
} from "../_parts/Sections";

export const metadata: Metadata = {
  title: "About",
  description:
    "Muhammad Sajjad — full-stack and AI engineer in production since 2017. Gold medalist, A1 in Computer Science; led e-commerce for a UAE company, built a live AI voice agent in Abu Dhabi, automates a US Shopify store.",
  alternates: { canonical: "/about" },
};

const ticker = ["Full-Stack", "Django", "FastAPI", "React", "Next.js", "AI & Voice"];

/**
 * About — the reference's About page runs seven blocks in this order:
 * header, banner, ticker, the three-column about block, achievements,
 * strengths, then a black closing CTA that leads into the footer.
 * This had only the first four; the last three were missing entirely,
 * which is why it read as a much shorter page than theirs.
 */
export default function P2About() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="One engineer, end to end"
        /* Not identity.intro — it opens "End to end since 2017", which
           would echo the title word for word right underneath it. */
        lede="Who I am, how I work, and what I’ve shipped — with the dates to back it up."
        cta={{ label: "See the work", href: "/work" }}
        image={{
          src: exhibition,
          alt: "Certificate presentation at a project exhibition, 12 November 2019",
        }}
      />
      <Ticker items={ticker} />

      {/* This IS the full About page, so the button points onward to
          Contact rather than back to itself. */}
      <section className="p2-sec" id="about">
        <AboutBlock cta={{ label: "Start a project", href: "/contact" }} />
        />
      </section>

      <section className="p2-sec p2-sec--tint">
        <AchievementsBlock />
      </section>

      <section className="p2-sec">
        <StrengthsBlock />
      </section>

      <CtaBand />
    </>
  );
}
