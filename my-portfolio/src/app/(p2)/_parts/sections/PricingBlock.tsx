import Reveal from "../Reveal";
import SliderDots from "../SliderDots";
import SectionHead from "../SectionHead";
import {
  contact,
  pricing,
  pricingSmallPrint,
} from "@/app/portfolio-content/site-content";

/* ── Pricing ──────────────────────────────────────────────────────
   Starting prices, not a checkout: the figure shows whether a budget
   fits, and every card leads to a conversation. */
export function PricingBlock() {
  return (
    <>
      <div className="p2-split p2-split--head">
        <SectionHead eyebrow="Pricing" title="Start ready-built, or go custom" />
        <p className="p2-lede">
          Tell us what you sell and we&rsquo;ll suggest the best fit, with a clear
          scope before any work starts.
        </p>
      </div>
      <div className="p2-price-grid">
        {pricing.map((t, i) => {
          const message = `Hi Sajjad, I found your portfolio and would like to talk about: ${t.title}.`;
          return (
            <Reveal
              as="article"
              dir="up"
              delay={i * 100}
              className={`p2-price${t.featured ? " p2-price--dark" : ""}`}
              key={t.title}
            >
              <div className="p2-price__in">
                <h5>{t.title}</h5>
                <p className="p2-price__sub">{t.sub}</p>
                <p className="p2-price__from">{t.price ? "Starting from" : "Price"}</p>
                <div className="p2-price__fig">
                  <b>{t.price ?? "Let\u2019s talk"}</b>
                  <span>{t.note}</span>
                </div>
                <span className="p2-price__lbl">Includes:</span>
                <ul>
                  {t.includes.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <a
                className="p2-price__cta"
                href={`https://wa.me/${contact.whatsapp.digits}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to us <span aria-hidden="true">&#8599;</span>
              </a>
            </Reveal>
          );
        })}
      </div>
      <SliderDots />
      <p className="p2-price-note">{pricingSmallPrint}</p>
    </>
  );
}
