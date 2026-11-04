import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contact } from "@/app/portfolio-content/site-content";
import { projectPages } from "@/app/portfolio-content/project-pages";
import "./project-page.css";

/* These pages carry the look of the selling images, not the site's own
   headings, so each project reads as its own piece of work. */
const display = Bricolage_Grotesque({
  variable: "--pj-display",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});
const serif = Instrument_Serif({
  variable: "--pj-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projectPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projectPages.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.name}: ${p.label}`,
    description: `${p.line} ${p.summary}`,
    alternates: { canonical: `/work/${p.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projectPages.findIndex((x) => x.slug === slug);
  if (index < 0) notFound();
  const p = projectPages[index];
  const next = projectPages[(index + 1) % projectPages.length];
  const c = p.colors;

  const whatsapp = `https://wa.me/${contact.whatsapp.digits}?text=${encodeURIComponent(
    `Hi Sajjad, I saw ${p.name} on your portfolio and would like to talk about a project.`,
  )}`;

  const style = {
    "--pj-hero": c.hero,
    "--pj-on-hero": c.onHero,
    "--pj-hero-accent": c.heroAccent,
    "--pj-page": c.page,
    "--pj-ink": c.ink,
    "--pj-key": c.key,
    "--pj-band": c.band,
    "--pj-on-band": c.onBand,
  } as CSSProperties;

  return (
    <article className={`pj ${display.variable} ${serif.variable}`} style={style}>
      <header className="pj-hero">
        <div className="pj-hero__txt">
          <Link className="pj-back" href="/work">
            <span aria-hidden="true">&#8592;</span> All work
          </Link>
          <p className="pj-label">{p.label}</p>
          <h1>{p.name}</h1>
          <p className="pj-line">{p.line}</p>
          <p className="pj-sum">{p.summary}</p>
          <div className="pj-actions">
            {p.price ? (
              <a className="pj-btn" href={whatsapp} target="_blank" rel="noopener noreferrer">
                Talk to us <span aria-hidden="true">&#8599;</span>
              </a>
            ) : null}
            {p.site ? (
              <a className="pj-btn pj-btn--ghost" href={p.site.href} target="_blank" rel="noopener noreferrer">
                {p.site.label} <span aria-hidden="true">&#8599;</span>
              </a>
            ) : null}
          </div>
        </div>
        <div className="pj-hero__art">
          <Image
            src={p.images.hero}
            alt={`${p.name} shown on a laptop, tablet and phone`}
            placeholder="blur"
            priority
            sizes="(max-width: 900px) 100vw, 60vw"
          />
          {p.notice ? <p className="pj-notice">{p.notice}</p> : null}
        </div>
      </header>

      <section className="pj-sec">
        <h2 className="pj-head">
          At a <em>glance</em>
        </h2>
        <Image
          className="pj-shot"
          src={p.images.wide}
          alt={`${p.name} selling image: features, what's included and price`}
          placeholder="blur"
          sizes="(max-width: 1300px) 100vw, 1240px"
        />
        <div className="pj-pair">
          <Image
            className="pj-shot"
            src={p.images.feed}
            alt={`${p.name} selling image for a social feed`}
            placeholder="blur"
            sizes="(max-width: 760px) 100vw, 56vw"
          />
          <Image
            className="pj-shot"
            src={p.images.story}
            alt={`${p.name} selling image for a phone story`}
            placeholder="blur"
            sizes="(max-width: 760px) 100vw, 36vw"
          />
        </div>
      </section>

      <section className="pj-sec pj-info">
        <div>
          <h2 className="pj-head">
            What it <em>does</em>
          </h2>
          <ol className="pj-feats">
            {p.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ol>
        </div>
        <div className="pj-details">
          <h2 className="pj-head">
            The <em>details</em>
          </h2>
          <dl>
            {p.details.map((d) => (
              <div key={d.label}>
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {p.price ? (
        <section className="pj-band">
          <div>
            <p className="pj-price">{p.price.headline}</p>
            {p.price.sub ? <p className="pj-price__sub">{p.price.sub}</p> : null}
            {p.price.small ? <p className="pj-price__small">{p.price.small}</p> : null}
          </div>
          <div className="pj-band__go">
            <p>{p.cta}</p>
            <a className="pj-btn pj-btn--band" href={whatsapp} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp <span aria-hidden="true">&#8599;</span>
            </a>
          </div>
        </section>
      ) : p.status ? (
        <section className="pj-band">
          <div>
            <p className="pj-price">{p.status.headline}</p>
            <p className="pj-price__sub">{p.status.sub}</p>
          </div>
        </section>
      ) : null}

      <Link className="pj-next" href={`/work/${next.slug}`}>
        <span>Next project</span>
        <b>
          {next.name} <span aria-hidden="true">&#8594;</span>
        </b>
      </Link>
    </article>
  );
}
