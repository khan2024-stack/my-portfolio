import Link from "next/link";

/** Branded 404: same header and footer as every page (it renders inside
 *  the (p2) layout), with a way back. */
export default function NotFound() {
  return (
    <section className="p2-intro">
      <span className="p2-badge">
        <span className="p2-badge__dot" aria-hidden="true" />
        Error 404
      </span>
      <h1>That page doesn’t exist</h1>
      <p>
        The link may be old or mistyped. Start from the home page, or go
        straight to the work.
      </p>
      <div className="p2-acts" style={{ justifyContent: "center" }}>
        <Link className="p2-btn" href="/">
          Back to home <span aria-hidden="true">&#8599;</span>
        </Link>
        <Link className="p2-btn p2-btn--line" href="/work">
          See the work <span aria-hidden="true">&#8599;</span>
        </Link>
      </div>
    </section>
  );
}
