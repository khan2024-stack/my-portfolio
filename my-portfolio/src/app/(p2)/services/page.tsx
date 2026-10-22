import type { Metadata } from "next";
import { services } from "@/app/portfolio-content/site-content";
import PageIntro from "../_parts/PageIntro";
import Ticker from "../_parts/Ticker";
import { CtaBand, ServicesGrid } from "../_parts/Sections";

export const metadata: Metadata = {
  title: "Services",
  description:
    "E-commerce and web platforms, AI and voice systems, automation, and ongoing management and support — scoped and quoted in writing. Django, FastAPI, Node.js, PostgreSQL, React, Next.js, Twilio, Pinecone.",
  alternates: { canonical: "/services" },
};

const ticker = services.map((s) => s.title);

export default function P2Services() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Four things, done properly, not six done halfway"
        lede="E-commerce and web platforms, AI and voice systems, the automation that keeps them running, and the support that looks after them once they are live."
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
