import type { Metadata } from "next";
import Link from "next/link";
import {
  contact,
  pricing,
  sections,
  services,
} from "@/app/portfolio-content/site-content";
import {
  CtaBand,
  Head,
  PageIntro,
  ProcessSteps,
  ServiceCards,
} from "../_parts/Blocks";
import { Reveal } from "../_parts/Motion";

export const metadata: Metadata = { title: "Services" };

export default function Services() {
  return (
    <>
      <PageIntro
        n="Services"
        title="Three things, done properly."
        lede="Full-stack builds, AI and voice systems, and the automation that keeps them running without you watching."
        actions={
          <Link className="x-btn x-btn--ink" href="/demo-2/contact">
            Start a project <span aria-hidden="true">→</span>
          </Link>
        }
      />

      <section className="x-sec x-sec--flush">
        <div className="x-wrap">
          <Head
            n="01"
            kicker="What I build"
            title={sections.services.title}
            lede="Each card lists what is actually included, so you can scan for your own problem instead of reading a pitch."
          />
          <ServiceCards detail />
        </div>
      </section>

      {/* ── Process ── */}
      <section className="x-sec x-sec--sink">
        <div className="x-wrap">
          <Head
            n="02"
            kicker="How it runs"
            title="From brief to launch."
            lede="Four stages, agreed up front. You always know which one we are in."
          />
          <ProcessSteps />
        </div>
      </section>

      {/* ── Pricing ──
          ⚠ No real rates exist yet, so every card reads "Custom" — see
          the `pricing` block in site-content, where `price: null`
          renders this state. Set a figure there and it takes the slot.
          The reference template's "BEST SELLER" tag is deliberately not
          reproduced: it is a sales claim with nothing behind it. */}
      <section className="x-sec">
        <div className="x-wrap">
          <Head
            n="03"
            kicker="Pricing"
            title="Priced to the project, not the hour."
            lede="Every job is quoted against a written scope before it starts — send the brief, get a number and a timeline back."
          />
          <div className="x-grid" style={{ marginTop: 48 }}>
            {pricing.map((t, i) => {
              const s = services[t.service];
              return (
                <Reveal key={s.title} delay={i * 90}>
                  <article
                    className={`x-price${t.featured ? " x-price--hi" : ""}`}
                  >
                    <div className="x-price__in">
                      <h3>{s.title}</h3>
                      <p className="x-price__sub">{s.sub}</p>
                      <div className="x-price__fig">
                        {t.price ? (
                          <>
                            <b>{t.price}</b>
                            <span>{t.per}</span>
                          </>
                        ) : (
                          <>
                            <b>Custom</b>
                            <span>quoted per scope</span>
                          </>
                        )}
                      </div>
                      <ul>
                        {s.capabilities.slice(0, 4).map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </div>
                    <a
                      className="x-price__cta"
                      href={`mailto:${contact.inbox}?subject=${encodeURIComponent(
                        `${s.title} — project enquiry`,
                      )}`}
                    >
                      Get a quote <span aria-hidden="true">→</span>
                    </a>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
