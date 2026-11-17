import Reveal from "./Reveal";

/**
 * Their eyebrow + heading pair, used above every section: a small
 * bordered badge (a lime square dot, 1px black border, uppercase label)
 * then a large Space Grotesk heading underneath. Measured off "MY
 * WORKS" / "Selected Projects & Creative Expertise" and the hero's
 * "AVAILABLE FOR FREELANCE" badge — the same two-part pattern both
 * places.
 *
 * Reused by nearly every section on the site, so wrapping it in Reveal
 * here is what gives the reference's scroll-in-on-view heading the
 * same treatment everywhere at once, rather than one-off per page.
 */
/* The last word of every section heading is set in the serif accent
   (the same device as "Four disciplines, one person"). */
function accentLast(title: string) {
  const i = title.trimEnd().lastIndexOf(" ");
  /* Not for one- or two-word titles: a name such as "Muhammad Sajjad"
     must stay plain. */
  if (i < 0 || title.trim().split(/\s+/).length < 3) return title;
  return (
    <>
      {title.slice(0, i + 1)}
      <em>{title.slice(i + 1)}</em>
    </>
  );
}

export default function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      dir="up"
      className={`p2-head${align === "center" ? " p2-head--center" : ""}`}
    >
      <span className="p2-badge">
        <span className="p2-badge__dot" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2>{accentLast(title)}</h2>
      {lede ? <p>{lede}</p> : null}
    </Reveal>
  );
}
