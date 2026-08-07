/**
 * Every section opens the same way: an indexed eyebrow with a square
 * mark, the title, and an optional line of context on the right.
 * Sharing it means the five sections cannot drift apart over time.
 */
export default function SectionHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string | null;
}) {
  return (
    <div className="sec__head">
      <div>
        <p className="eyebrow tagline">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {/* Needs its own class: a bare `.sec__head p` rule is 0-1-1 and
          outranks `.eyebrow` at 0-1-0, so it silently restyled the
          eyebrow above instead of only this line. */}
      {lede ? <p className="sec__lede">{lede}</p> : null}
    </div>
  );
}
