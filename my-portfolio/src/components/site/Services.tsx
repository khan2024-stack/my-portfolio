import { sections, services } from "@/app/portfolio-content/site-content";
import SectionHead from "./SectionHead";

/**
 * Six discipline cards. Each opens with a dark band carrying the label
 * and title — it gives the card weight without an image, which is why
 * there is no picture slot here any more.
 */
export default function Services() {
  return (
    <section className="sec" id="services">
      <SectionHead {...sections.services} />

      <div className="svcs">
        {services.map((s) => (
          <article className="svc rv" key={s.no}>
            <div className="svc__band">
              <span className="svc__k">{s.sub}</span>
              <h3>{s.title}</h3>
              <span className="svc__rule" aria-hidden="true" />
            </div>

            <div className="svc__in">
              <p>{s.body}</p>

              <div className="svc__list">
                {s.capabilities.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
