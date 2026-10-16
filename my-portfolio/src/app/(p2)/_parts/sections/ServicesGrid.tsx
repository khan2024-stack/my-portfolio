import Link from "next/link";
import Reveal from "../Reveal";
import SliderDots from "../SliderDots";
import ServiceIcon from "../ServiceIcon";
import {
  services,
} from "@/app/portfolio-content/site-content";

/* ── Services grid ───────────────────────────────────────────────── */
/**
 * Their services grid, measured: bordered 434×300 cells in one flush
 * run, each with a small number badge at the top-left, a large 150px
 * line icon, a 19.2px/600 title, a line of copy, and a 51×51 lime arrow
 * button pinned to the bottom-right. The first cell is not a service —
 * it is a black intro panel carrying copy and a lime button.
 *
 * The black intro panel their grid leads with is deliberately dropped —
 * its button duplicated the "All 3 services" link in the section head.
 *
 * `detail` prints each service's capability list — the page wants the
 * full detail, the home preview does not.
 */
export function ServicesGrid({ detail = false }: { detail?: boolean } = {}) {
  return (
    <>
    <div className="p2-svc-grid">
      {services.map((s, i) => (
        <Reveal
          as="article"
          dir="up"
          delay={i * 100}
          className="p2-svc"
          key={s.no}
        >
          <span className="p2-svc__no">{s.no}</span>
          <span className="p2-svc__art" aria-hidden="true">
            <ServiceIcon title={s.title} />
          </span>
          <div className="p2-svc__body">
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            {detail ? (
              <ul>
                {s.capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            ) : null}
          </div>
          <Link
            className="p2-svc__go"
            href="/contact"
            aria-label={`Enquire about ${s.title}`}
          >
            <span aria-hidden="true">&#8599;</span>
          </Link>
        </Reveal>
      ))}
    </div>
    <SliderDots />
    </>
  );
}
