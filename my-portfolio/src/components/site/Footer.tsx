import { identity, navLinks, socials } from "@/app/portfolio-content/site-content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="foot wrap">
      <div className="foot__in">
        {/* Size lives in globals.css as .logo--sm — this was the only
            inline style in the component set. */}
        <a className="logo logo--sm" href="#top">
          {identity.shortName}
          <i>.</i>
        </a>

        <nav aria-label="Footer">
          {navLinks
            .filter((l) => l.id !== "top")
            .map((l) => (
              <a key={l.id} href={`#${l.id}`}>
                {l.label}
              </a>
            ))}
        </nav>

        <nav className="social" aria-label="Social">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </nav>

        <span>
          © {year} {identity.fullName}
        </span>
      </div>
    </footer>
  );
}
