import Reveal from "../Reveal";
import SliderDots from "../SliderDots";
import SectionHead from "../SectionHead";
import {
  contact,
  pricing,
  services,
} from "@/app/portfolio-content/site-content";

/* ── Pricing ──────────────────────────────────────────────────────
   Their three 420px cards under a centred head, middle card black.
   Differences are deliberate: no dollar figures (none exist — a null
   price renders "Custom · quoted per scope", see `pricing` in
   site-content) and no "BEST SELLER" tag (an unverifiable sales
   claim); the middle card keeps the visual emphasis only. Each card
   is one of the three real services, capabilities and all. */
export function PricingBlock() {
  return (
    <>
      {/* Same head as Works: title left, one-line intro on the right. It
          was the only centred head on the page. */}
      <div className="p2-split p2-split--head">
        <SectionHead eyebrow="Pricing" title="Priced to the project, not the hour" />
        <p className="p2-lede">
          Every job is quoted against a written scope before it starts — send
          the brief, get a number and a timeline back.
        </p>
      </div>
      <div className="p2-price-grid">
        {pricing.map((t, i) => {
          const s = services[t.service];
          return (
            <Reveal
              as="article"
              dir="up"
              delay={i * 100}
              className={`p2-price${t.featured ? " p2-price--dark" : ""}`}
              key={s.title}
            >
              <div className="p2-price__in">
                <h5>{s.title}</h5>
                <p className="p2-price__sub">{s.sub}</p>
                <div className="p2-price__fig">
                  {t.price ? (
                    <>
                      <b>{t.price}</b>
                      <span>{t.per}</span>
                    </>
                  ) : (
                    <>
                      <b>{t.per === "/month" ? "Monthly plan" : "Fixed quote"}</b>
                      <span>per written scope</span>
                    </>
                  )}
                </div>
                <span className="p2-price__lbl">Includes:</span>
                <ul>
                  {s.capabilities.slice(0, 4).map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              {/* Full-width flush bar, not an inline button inside the
                  card's own padding — checked live: their CHOOSE strip
                  runs edge to edge along the card's bottom border. */}
              <a
                className="p2-price__cta"
                href={`mailto:${contact.inbox}?subject=${encodeURIComponent(`${s.title} — project enquiry`)}`}
              >
                Get a quote <span aria-hidden="true">&#8599;</span>
              </a>
            </Reveal>
          );
        })}
      </div>
      <SliderDots />
    </>
  );
}
