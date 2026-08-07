"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { clients, identity, stats } from "@/app/portfolio-content/site-content";

/* Figures count up once, when the row first comes into view. */
function useCountUp(target: number, run: boolean) {
  const [value, setValue] = useState(run ? 0 : target);

  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const start = performance.now();
    const duration = 900;
    let frame = 0;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, run]);

  return value;
}

function Stat({
  value,
  unit,
  label,
  source,
  run,
}: {
  value: number;
  unit: string;
  label: string;
  source: string;
  run: boolean;
}) {
  const shown = useCountUp(value, run);

  return (
    <div className="stat">
      <span className="stat__v">
        <b>{shown}</b>
        <u>{unit}</u>
      </span>
      <span className="stat__k">{label}</span>
      <span
        className="stat__src"
        dangerouslySetInnerHTML={{ __html: source }}
      />
    </div>
  );
}

export default function Hero() {
  const [run, setRun] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero__grid">
        <div>
          <p className="eyebrow in d1">
            {identity.role} · {identity.location}
          </p>
          <h1 className="in d1">{identity.fullName}</h1>
          <p className="hero__role in d2">{identity.tagline}</p>
          <p className="lead in d2">{identity.intro}</p>

          <div className="hero__acts in d3">
            <a className="btn btn--fill" href="#contact">
              Start a project <span className="arw">→</span>
            </a>
            <a className="btn btn--ghost" href={identity.cvUrl} download>
              Download CV
            </a>
          </div>

        </div>

        <div className="photo in d2">
          <div className="photo__in">
            <Image
              src={identity.portrait}
              alt={`${identity.fullName}, ${identity.role}`}
              placeholder="blur"
              priority
              sizes="300px"
            />
          </div>
        </div>
      </div>

      <div className="stats in d3" ref={statsRef}>
        {stats.map((s) => (
          <Stat key={s.label} run={run} {...s} />
        ))}
      </div>

      {/* Who, not what they said. Until there are real quotes on the
          page, this is the only third-party name a visitor sees — and
          every one of these already appears in the resume or the work
          grid, so it claims nothing new. */}
      <div className="clients in d3">
        <span className="clients__k">Worked with</span>
        <ul>
          {clients.map((c) => (
            <li key={c.name}>
              {c.name}
              <i>{c.place}</i>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
