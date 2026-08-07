import { rating, sections, testimonials } from "@/app/portfolio-content/site-content";
import SectionHead from "./SectionHead";

/**
 * Client quotes and the Google score. Both are opt-in: with no
 * testimonials and no rating in site-content the section returns null
 * and the page closes up, so an unfinished shelf can never ship.
 */

/** Grey row underneath, accent row clipped to the score on top, so 4.5
 *  shows half a star instead of rounding up to five. */
function Stars({ score }: { score: number }) {
  return (
    <span className="stars" role="img" aria-label={`${score} out of 5`}>
      <span className="stars__fill" style={{ width: `${(score / 5) * 100}%` }}>
        {Array.from({ length: 5 }, (_, i) => (
          <i key={i} />
        ))}
      </span>
      {Array.from({ length: 5 }, (_, i) => (
        <i key={i} />
      ))}
    </span>
  );
}

/** Two letters beats a stock silhouette: it is real information, and it
 *  never looks like a photo nobody supplied. */
function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  if (testimonials.length === 0 && !rating) return null;

  return (
    <section className="sec" id="testimonials">
      <SectionHead {...sections.testimonials} />

      {rating ? (
        <a
          className="rating"
          href={rating.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="rating__score">{rating.score.toFixed(1)}</span>
          <Stars score={rating.score} />
          <span className="rating__meta">
            {rating.count} Google review{rating.count === 1 ? "" : "s"}
          </span>
          <span className="rating__go">
            Read on Google <span className="arw">→</span>
          </span>
        </a>
      ) : null}

      {testimonials.length > 0 ? (
        <div className="tsts">
          {testimonials.map((t) => (
            <figure className="tst rv" key={t.name + t.company}>
              {/* figcaption has to be the first or last child of a
                  figure. It was the second of five, which is invalid and
                  left the caption announcing only the name — the role,
                  date and quote sat outside it. The quote mark moved to
                  a ::before since it is decorative anyway.

                  Role and date sit below the avatar row, not beside the
                  name: the column left of them is only 155px, and
                  "Creative Director · Studio Marrow" wrapped to four
                  lines there. Full width gives it one or two. */}
              <figcaption className="tst__cap">
                <span className="tst__who">
                  <span className="tst__ava" aria-hidden="true">
                    {initials(t.name)}
                  </span>
                  <span className="tst__name">{t.name}</span>
                </span>

                <span className="tst__meta">
                  <span className="tst__role">
                    {t.role} · {t.company}
                  </span>
                  <span className="tst__date">{t.date}</span>
                </span>
              </figcaption>

              <Stars score={t.stars} />

              <blockquote>{t.quote}</blockquote>
            </figure>
          ))}
        </div>
      ) : null}
    </section>
  );
}
