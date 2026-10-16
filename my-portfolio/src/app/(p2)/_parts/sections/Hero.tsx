import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";
import {
  clients,
  identity,
  skills,
  stats,
} from "@/app/portfolio-content/site-content";

/* ── Hero — home page only ───────────────────────────────────────── */
export function Hero() {
  return (
    <section className="p2-hero">
      <Reveal as="div" dir="up" className="p2-hero__l">
        <h1>{identity.tagline}</h1>
        <p>{identity.intro}</p>
        {/* Solid proof strip: the numbers get their own cells instead of
            hiding inside a sentence. All three come from `stats`, the one
            place those figures are sourced. */}
        <ul className="p2-hero__proof">
          <li>
            <b>{stats[2]!.value}{stats[2]!.unit}</b>
            <span>{stats[2]!.label}</span>
          </li>
          <li>
            <b>{stats[3]!.value}{stats[3]!.unit}</b>
            <span>{stats[3]!.label}</span>
          </li>
          <li>
            <b>{stats[1]!.value}{stats[1]!.unit}</b>
            <span>{stats[1]!.label}</span>
          </li>
        </ul>
        <div className="p2-acts">
          <Link className="p2-btn" href="/work">
            View work <span aria-hidden="true">&#8599;</span>
          </Link>
          <Link className="p2-btn p2-btn--line" href="/contact">
            Contact me <span aria-hidden="true">&#8599;</span>
          </Link>
        </div>
      </Reveal>

      {/* fadeInRight, not fadeInUp — this column is the aside next to
          the pitch, not a continuation of it, matching the reference's
          own left/right split between its two hero columns. */}
      <Reveal as="div" dir="right" delay={150} className="p2-hero__r">
        <div className="p2-hero__mid">
          <div className="p2-hero__shot">
            <Image
              src={identity.portrait}
              alt={`${identity.fullName}, ${identity.role}`}
              placeholder="blur"
              sizes="(max-width: 1000px) 100vw, 30vw"
            />
          </div>

          <div className="p2-hero__cards">
            <div className="p2-card p2-card--accent">
              <span className="p2-card__k">Based in</span>
              <b>{identity.location}</b>
            </div>
            <div className="p2-card p2-card--dark">
              <span className="p2-card__k">Clients across</span>
              <dl className="p2-markets">
                {(["UAE", "UK", "USA"] as const).map((r) => (
                  <div key={r}>
                    <dt>{r}</dt>
                    <dd>
                      {clients
                        .filter((c) => c.region === r)
                        .map((c) => c.name)
                        .join(" · ")}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="p2-card p2-card--line">
              <b>
                {stats[0]!.value}
                <i>{stats[0]!.unit}</i>
              </b>
              <span className="p2-card__k">{stats[0]!.label}</span>
            </div>
          </div>
        </div>

        <div className="p2-hero__spec">
          <span>Specializing in</span>
          <ul>
            {skills.map((s) => (
              <li key={s.group}>{s.group}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
