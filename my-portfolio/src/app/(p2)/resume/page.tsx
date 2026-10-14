import type { Metadata } from "next";
import { experience, identity, skills } from "@/app/portfolio-content/site-content";
import PageIntro from "../_parts/PageIntro";
import Ticker from "../_parts/Ticker";
import { CtaBand, ResumeBlock } from "../_parts/Sections";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Experience and education: AI Voice Systems Engineer, E-Commerce Development Lead, full-stack developer since 2017. Master's in Computer Science, gold medalist.",
  alternates: { canonical: "/resume" },
};

const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight"];
const ticker = skills.flatMap((s) => s.items).slice(0, 10);

export default function P2Resume() {
  return (
    <>
      <PageIntro
        eyebrow="Resume page"
        title={`Since 2017: ${WORDS[experience.length] ?? experience.length} roles, one straight line`}
        lede="From a Peshawar bootcamp to production AI voice systems — the record behind the pitch, open to freelance projects and full-time roles."
        cta={{ label: "Download CV", href: identity.cvUrl, download: true }}
      />
      <Ticker items={ticker} />
      <section className="p2-sec" id="resume">
        <ResumeBlock />
      </section>

      <CtaBand />
    </>
  );
}
