"use client";

import { useState } from "react";
import Link from "next/link";
import { contact, identity } from "@/app/portfolio-content/site-content";
import { FAQS } from "@/app/portfolio-content/faqs";
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
export default function Faq() {
  /* First row open, as theirs is. */
  const [open, setOpen] = useState(0);

  return (
    <div className="p2-split">
      <div className="p2-split__l">
        <SectionHead eyebrow="FAQs" title="Frequently asked questions" />
        <div className="p2-about__foot">
          <p className="p2-lede">
            Still have a question? Ask me directly — I reply personally,
            from {identity.location}.
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
