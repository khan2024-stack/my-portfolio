import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/portfolio-content/site-content";
import Reveal from "./Reveal";
import SliderDots from "./SliderDots";
import VoiceWave from "./VoiceWave";

type Item = (typeof projects)[number];

/**
 * Project cards — one clean format for every project.
 *
 *   ┌─────────────────────┐
 *   │   soft stage        │
 *   │    ┌───────────┐    │   the work, on a laptop screen
 *   │    └───────────┘    │
 *   ├─────────────────────┤
 *   │ Title            ↗  │   a title and one line, nothing more
 *   │ Kind · Stack        │
 *   └─────────────────────┘
 *
 * Three to a row. The home page shows six (two clean rows) with a "See
 * all" button for the remainder; /work shows everything. If a count ever
 * leaves a lone card (7 on /work) the first — the newest — leads
 * full-width, laptop beside its text, and the rest fall into rows of three.
 *
 * Server-rendered and script-free; each whole card is one link.
 */
export default function WorkShowcase({
  items = projects.slice(0, 6), // two rows of three; the rest sit behind "See all"
}: {
  items?: typeof projects;
}) {
  const rest = items.length % 3; // 0 → clean rows, 1 → lead card, 2 → last two wide
  const hasMore = items.length < projects.length;

  return (
    <div className="p2-pcs">
      <div className={`p2-pcs__grid is-r${rest}`}>
        {items.map((p) => (
          <Card key={p.title} p={p} />
        ))}
      </div>
      {/* Phones: the grid above becomes a swipe row (CSS) and these dots
          show the position; hidden by CSS everywhere else. */}
      <SliderDots />

      {hasMore ? (
        <div className="p2-pcs__more">
          <Link className="p2-btn" href="/work">
            See all {projects.length} projects <span aria-hidden="true">&#8599;</span>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

function Card({ p }: { p: Item }) {
  const external = !!p.href && !p.href.startsWith("/");
  const title = <h3>{p.title}</h3>;

  const label = p.linkLabel ?? "Watch demo";

  return (
    <Reveal as="article" dir="up" className="p2-pc">
      <div className="p2-pc__stage">
        <div className="p2-pc__device">
          <div className="p2-pc__lid">
            <span className="p2-pc__cam" aria-hidden="true" />
            <div className="p2-pc__screen">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`${p.title} — screenshot of the finished work`}
                  placeholder="blur"
                  sizes="(max-width: 680px) 90vw, (max-width: 1000px) 45vw, 30vw"
                />
              ) : (
                <VoiceWave />
              )}
            </div>
          </div>
          <div className="p2-pc__base" aria-hidden="true">
            <i />
          </div>
        </div>
      </div>

      <div className="p2-pc__foot">
        <div className="p2-pc__txt">
          {p.href ? (
            external ? (
              <a
                className="p2-pc__link"
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
              </a>
            ) : (
              <Link className="p2-pc__link" href={p.href}>
                {title}
              </Link>
            )
          ) : (
            title
          )}
          <p>{p.category}</p>
          {/* Shown on the lead card only (CSS) — the small cards stay to a
              title and one line. */}
          <p className="p2-pc__stack">{p.tech}</p>
        </div>
        <span className="p2-pc__go" aria-hidden="true">
          <b>{label}</b>
          <span>&#8599;</span>
        </span>
      </div>
    </Reveal>
  );
}
