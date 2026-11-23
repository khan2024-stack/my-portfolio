import type { Metadata } from "next";
import { pageMeta } from "@/app/portfolio-content/seo";
import { services } from "@/app/portfolio-content/site-content";
import PageIntro from "../_parts/PageIntro";
import Ticker from "../_parts/Ticker";
import { CtaBand, ServiceRows } from "../_parts/Sections";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Services",
    description:
      "E-commerce and web platforms, AI and voice systems, automation, and ongoing management and support — scoped and quoted in writing. Django, FastAPI, Node.js, PostgreSQL, React, Next.js, Twilio, Pinecone.",
    path: "/services",
  }),
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
      {/* One row per service: a real-screen thumbnail left, the full text
          and capability list right (2026-11-15). */}
      <section className="p2-sec" id="services">
        <ServiceRows />
      </section>

      <CtaBand />
    </>
  );
}
