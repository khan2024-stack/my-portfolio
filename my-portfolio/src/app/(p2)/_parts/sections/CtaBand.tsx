import Link from "next/link";

/* ── Closing CTA ──────────────────────────────────────────────────
   Black band, 64px white heading (same size as the hero H1 — measured),
   lime button on the right. */
export function CtaBand({
  title = "Let’s build something that stays live",
  cta = { label: "Start a project", href: "/contact" },
}: {
  title?: string;
  cta?: { label: string; href: string };
} = {}) {
  /* The Contact page ends with this band too, but pointing it back at
     /portfolio-2/contact would land the reader where they already are —
     so it takes a mailto there instead. Anything not starting with "/"
     leaves the router and needs a plain anchor. */
  const inner = (
    <>
      {cta.label} <span aria-hidden="true">&#8599;</span>
    </>
  );
  return (
    <section className="p2-cta">
      <h2>{title}</h2>
      {cta.href.startsWith("/") ? (
        <Link className="p2-btn p2-btn--lime" href={cta.href}>
          {inner}
        </Link>
      ) : (
        <a className="p2-btn p2-btn--lime" href={cta.href}>
          {inner}
        </a>
      )}
    </section>
  );
}
