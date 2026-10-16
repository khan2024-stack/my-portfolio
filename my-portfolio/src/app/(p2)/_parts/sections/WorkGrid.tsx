import Image from "next/image";
import Reveal from "../Reveal";
import VoiceWave from "../VoiceWave";
import {
  projects,
} from "@/app/portfolio-content/site-content";

/* ── Work grid ────────────────────────────────────────────────────── */
export function WorkGrid({ items = projects }: { items?: typeof projects }) {
  return (
    <div className="p2-work-grid">
      {items.map((p, i) => (
          <Reveal
            as="article"
            dir="up"
            delay={(i % 3) * 100}
            className="p2-tile"
            key={p.title}
          >
            <div className="p2-tile__shot">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`Screenshot of the ${p.title} interface`}
                  placeholder="blur"
                  sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
                />
              ) : (
                <VoiceWave />
              )}
              <span className="p2-tile__pill p2-tile__pill--accent">
                {p.category.split(" · ")[0]}
              </span>
              {p.href ? (
                <a
                  className="p2-tile__go"
                  href={p.href}
                  aria-label={`Open ${p.title}`}
                  {...(p.href.startsWith("/")
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                >
                  &#8599;
                </a>
              ) : null}
            </div>
            <div className="p2-tile__cap">
              <h4>{p.title}</h4>
              <p>{p.tech}</p>
            </div>
          </Reveal>
      ))}
    </div>
  );
}
