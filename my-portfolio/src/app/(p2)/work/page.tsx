import type { Metadata } from "next";
import { earlierWork, projects, services, skills } from "@/app/portfolio-content/site-content";
import Faq from "../_parts/Faq";
import PageIntro from "../_parts/PageIntro";
import SectionHead from "../_parts/SectionHead";
import Ticker from "../_parts/Ticker";
import { CtaBand } from "../_parts/Sections";
import WorkShowcase from "../_parts/WorkShowcase";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects: online stores, an AI voice agent and a business website, each with its own page.",
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
        eyebrow="Work"
        title="Real builds, ready to look through"
        lede={`${projects.length} projects: online stores, an AI voice agent and a business website. Open any one to see it on every screen.`}
        cta={{ label: "Start a project", href: "/contact" }}
      />
      <Ticker items={ticker} />

      <section className="p2-sec" id="work">
        <div className="p2-work-head"><SectionHead eyebrow="All projects" title="Open a project" /></div>
        <WorkShowcase items={projects} />
      </section>

      <section className="p2-sec p2-sec--tint" id="earlier">
        <SectionHead eyebrow="Earlier work" title="Also built" />
        <ul className="p2-earlier">
          {earlierWork.map((w) => (
            <li key={w.title}>
              <h3>{w.title}</h3>
              <p className="p2-earlier__cat">{w.category}</p>
              <p>{w.body}</p>
              {w.href ? (
                <a className="p2-link" href={w.href} target="_blank" rel="noopener noreferrer">
                  Visit site <span aria-hidden="true">&#8599;</span>
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="p2-sec p2-sec--tint">
        <Faq />
      </section>

      <CtaBand />
    </>
  );
}
