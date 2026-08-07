import Image from "next/image";
import { projects, sections } from "@/app/portfolio-content/site-content";
import SectionHead from "./SectionHead";

/**
 * Projects with the image at the top of each card. A project with no
 * image or detail yet renders dimmed with a hatched bed, so the gap
 * reads as deliberate rather than broken.
 */
export default function Work() {
  return (
    <section className="sec" id="work">
      <SectionHead {...sections.work} />

      <div className="grid3">
        {projects.map((p) => {
          const pending = p.status === "pending";

          return (
            <article
              className={`card rv${pending ? " pending" : ""}`}
              key={p.title}
            >
              <div className="shot">
                {/* Was "Shipped" on all six — a badge every card carries
                    tells a reader nothing and spends an accent on top of
                    the picture. The category varies, so it earns the
                    space. "Pending" still overrides it when it applies,
                    because that genuinely distinguishes a card. */}
                <span className={`chip${pending ? " chip--pending" : ""}`}>
                  {pending ? "Pending" : p.category}
                </span>

                {p.image ? (
                  /* Not `alt={p.title}` — the <h3> directly beneath says
                     the same words, so every project was announced twice
                     in a row. This describes what the picture actually
                     is instead. */
                  <Image
                    src={p.image}
                    alt={`Screenshot of the ${p.title} interface`}
                    placeholder="blur"
                    sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  />
                ) : p.plate === "signal" ? (
                  /* Bar heights are deliberately uneven and asymmetric —
                     an even curve reads as a logo, not a voice. */
                  <span className="wave" aria-hidden="true">
                    {[26, 44, 32, 58, 38, 74, 52, 88, 46, 66, 34, 54, 28, 40].map(
                      (h, i) => (
                        /* The stagger is what makes it read as speech
                           rather than an equaliser — each bar starts its
                           cycle 90ms after its neighbour, so the motion
                           travels across the card. */
                        <i
                          key={i}
                          style={{
                            height: `${h}%`,
                            animationDelay: `${i * 90}ms`,
                          }}
                        />
                      )
                    )}
                  </span>
                ) : (
                  <span className="shot__label">Image · 16:10</span>
                )}
              </div>

              {/* Everything below the picture gets its own padded box, so
                  the picture itself can run to the card edges — same
                  anatomy as a service card: full-bleed block on top,
                  padded content beneath. */}
              <div className="card__in">
                <h3>{p.title}</h3>
                <p>{p.body}</p>

                <p className="tech">{p.tech}</p>

                {/* The category moved onto the picture, so the action gets
                    the whole row: label hard left, arrow hard right. A
                    full-width target also reads as clickable from across
                    the page, which a short inline link does not. */}
                <div className="card__foot">
                  {p.href ? (
                    /* An internal case-study link must not open a new tab
                       — only the outbound ones get target/rel. */
                    <a
                      className="link link--wide"
                      href={p.href}
                      {...(p.href.startsWith("/")
                        ? {}
                        : { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {p.linkLabel ?? "Watch demo"} <span className="arw">→</span>
                    </a>
                  ) : (
                    <span className="link link--wide link--muted">
                      {p.note ?? "Detail pending"} <span className="arw">·</span>
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
