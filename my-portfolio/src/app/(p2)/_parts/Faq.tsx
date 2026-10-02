"use client";

import { useState } from "react";
import Link from "next/link";
import {
  about,
  contact,
  identity,
  services,
  skills,
} from "@/app/portfolio-content/site-content";
import SectionHead from "./SectionHead";

/**
 * Their FAQ block: a split head on the left (badge, heading, copy and a
 * button, pinned top and bottom) beside an accordion on the right —
 * bordered rows, the open one filled black with a minus, the closed
 * ones cream with a plus.
 *
 * Every answer below is assembled from data that already exists in
 * site-content rather than written fresh, so there is one source of
 * truth: change the location or the availability line there and this
 * updates with it. Nothing here asserts anything the site doesn't
 * already say elsewhere.
 */
const FAQS: { q: string; a: string }[] = [
  {
    q: "Where are you based?",
    a: `${identity.location}. ${
      contact.details.find((d) => d.label === "Works")?.value ?? ""
    }.`,
  },
  {
    q: "Are you taking on new work?",
    a:
      about.facts.find((f) => f.label === "Freelance")?.value ??
      "Taking on select projects.",
  },
  {
    q: "What do you build?",
    a: `${services.map((s) => s.title).join(", ")} — taken end to end, from schema and API design through to the interface a customer actually uses.`,
  },
  {
    q: "What do you work in?",
    a: skills.map((s) => `${s.group}: ${s.items.join(" · ")}`).join(". ") + ".",
  },
  {
    q: "What languages do you work in?",
    a:
      about.facts.find((f) => f.label === "Languages")?.value ??
      "English, Urdu and Pashto.",
  },
];

export default function Faq() {
  /* First row open, as theirs is. */
  const [open, setOpen] = useState(0);

  return (
    <div className="p2-split">
      <div className="p2-split__l">
        <SectionHead eyebrow="FAQs" title="Frequently asked questions" />
        <div className="p2-about__foot">
          <p className="p2-lede">
            Anything not covered here, ask directly — I answer from{" "}
            {identity.location}.
          </p>
          <Link className="p2-btn" href="/contact">
            Get in touch <span aria-hidden="true">&#8599;</span>
          </Link>
        </div>
      </div>

      <div className="p2-faq">
        {FAQS.map((f, i) => {
          const isOpen = i === open;
          return (
            <div className={`p2-faq__row${isOpen ? " is-on" : ""}`} key={f.q}>
              <h3>
                <button
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  /* Clicking the open row closes it, rather than
                     trapping the reader on whichever one is showing. */
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {f.q}
                  <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
              </h3>
              {isOpen ? (
                <div className="p2-faq__a" id={`faq-${i}`}>
                  <p>{f.a}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
