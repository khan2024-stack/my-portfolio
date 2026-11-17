import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

/**
 * Their inner-page banner — measured on /about-us/ and /works/, both
 * identical in structure: a centred badge, a centred H2 at 52.8px
 * (same size as every other section heading, just centred here), a
 * short centred lede, then one button. Every dedicated page opens on
 * this before the ticker and the real content.
 *
 * With `image` the banner becomes a split: copy left, framed photo
 * right. Not a full-bleed background — a photo this size would be
 * upscaled well past its pixels across a wide window.
 */
export default function PageIntro({
  eyebrow,
  title,
  lede,
  cta,
  image,
  facts,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  /** `download` for a static file (the CV) — a plain anchor, since
   *  next/link to a non-route asset won't trigger a download. */
  cta?: { label: string; href: string; download?: boolean };
  /** `label` + `caption` sit on a bar under the photo. */
  image?: { src: StaticImageData; alt: string; label?: string; caption?: string };
  /** Short figures shown in a row under the button (split banner only). */
  facts?: { value: string; label: string }[];
}) {
  const button = cta ? (
    cta.download ? (
      <a className="p2-btn" href={cta.href} download>
        {cta.label} <span aria-hidden="true">&#8599;</span>
      </a>
    ) : (
      <Link className="p2-btn" href={cta.href}>
        {cta.label} <span aria-hidden="true">&#8599;</span>
      </Link>
    )
  ) : null;

  const copy = (
    <>
      <span className="p2-badge">
        <span className="p2-badge__dot" aria-hidden="true" />
        {eyebrow}
      </span>
      <h1>{title}</h1>
      {lede ? <p>{lede}</p> : null}
      {button}
    </>
  );

  if (!image) return <section className="p2-intro">{copy}</section>;

  return (
    <section className="p2-intro p2-intro--split">
      <div className="p2-intro__copy">
        {copy}
        {facts?.length ? (
          <ul className="p2-intro__facts">
            {facts.map((f) => (
              <li key={f.label}>
                <b>{f.value}</b>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <figure className="p2-intro__fig">
        <div className="p2-intro__photo">
          <Image
            src={image.src}
            alt={image.alt}
            placeholder="blur"
            priority
            sizes="(max-width: 1000px) 100vw, 520px"
          />
        </div>
        {image.caption ? (
          <figcaption>
            {image.label ? <b>{image.label}</b> : null}
            <span>{image.caption}</span>
          </figcaption>
        ) : null}
      </figure>
    </section>
  );
}
