import type { Metadata } from "next";
import { experience, skills } from "@/app/portfolio-content/site-content";
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
        eyebrow="Resume"
        title={`Since 2017: ${WORDS[experience.length] ?? experience.length} roles, one straight line`}
        lede="From a Peshawar bootcamp to AI voice systems in production — available for freelance projects."
        cta={{
          label: "Download resume (PDF)",
          href: "/Muhammad-Sajjad-Resume.pdf",
          download: true,
        }}
      />
      <Ticker items={ticker} />
      <section className="p2-sec" id="resume">
        <ResumeBlock />
      </section>

      <CtaBand />
    </>
  );
}
