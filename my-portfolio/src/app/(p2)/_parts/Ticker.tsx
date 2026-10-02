/** The scrolling black band under every page's banner — real service
 *  and skill names, not filler. Duplicated once so the marquee loops
 *  without a visible seam. */
export default function Ticker({ items }: { items: string[] }) {
  return (
    <div className="p2-ticker" aria-hidden="true">
      <div className="p2-ticker__track">
        {[...items, ...items].map((t, i) => (
          <span key={i}>
            {t}
            <b>&#9632;</b>
          </span>
        ))}
      </div>
    </div>
  );
}
