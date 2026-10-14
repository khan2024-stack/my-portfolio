import type { Metadata } from "next";
import { projects, sections, services, skills } from "@/app/portfolio-content/site-content";
import Faq from "../_parts/Faq";
import PageIntro from "../_parts/PageIntro";
import SectionHead from "../_parts/SectionHead";
import Ticker from "../_parts/Ticker";
import { CtaBand } from "../_parts/Sections";
import WorkShowcase from "../_parts/WorkShowcase";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects: a Shopify order automation, an AI voice agent answering live calls, and commerce platforms built for clients in the USA, UAE and UK.",
  alternates: { canonical: "/work" },
};

const ticker = [...services.map((s) => s.title), ...skills.map((s) => s.group)];

/**
 * Work — their Works page runs: banner · ticker · the grid · FAQs ·
 * closing CTA. This had only the first three.
 */
export default function P2Work() {
  return (
    <>
      <PageIntro
        eyebrow="Works page"
        title="Shipped, live, and still running"
        lede={`${projects.length} projects: a Shopify automation, an AI voice agent answering live calls, and commerce platforms built for clients in the USA, UAE and UK.`}
        cta={{ label: "Start a project", href: "/contact" }}
      />
      <Ticker items={ticker} />

      <section className="p2-sec" id="work">
        <SectionHead eyebrow="My works" title={sections.work.title} />
        <WorkShowcase items={projects} />
      </section>

      <section className="p2-sec p2-sec--tint">
        <Faq />
      </section>

      <CtaBand />
    </>
  );
}
