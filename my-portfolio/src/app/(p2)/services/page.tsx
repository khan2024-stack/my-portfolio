import type { Metadata } from "next";
import { services } from "@/app/portfolio-content/site-content";
import PageIntro from "../_parts/PageIntro";
import Ticker from "../_parts/Ticker";
import { CtaBand, ServicesGrid } from "../_parts/Sections";

export const metadata: Metadata = { title: "Services" };

const ticker = services.map((s) => s.title);

export default function P2Services() {
  return (
    <>
      <PageIntro
        eyebrow="Services page"
        title="Three things, done properly, not six done halfway"
        lede="Full-stack builds, AI and voice systems, and the automation that keeps them running without you watching."
        cta={{ label: "Start a project", href: "/contact" }}
      />
      <Ticker items={ticker} />
      {/* `detail` prints each service's full capability list — the page
          carries it, the home preview does not. No intro panel here:
          the page banner above already does that job. */}
      <section className="p2-sec" id="services">
        <ServicesGrid detail />
      </section>

      <CtaBand />
    </>
  );
}
