import Link from "next/link";
import { contact, identity, socials } from "@/app/portfolio-content/site-content";
import { P2_NAV } from "./nav";

/** Their footer is the header's palette inverted — black ground, the
 *  same square logo mark, in white. */
export default function P2Footer() {
  return (
    <footer className="p2-foot">
      <div className="p2-foot__top">
        <Link className="p2-logo p2-logo--light" href="/">
          <span className="p2-logo__mark" aria-hidden="true">
            {identity.shortName.charAt(0)}
            <i>.</i>
          </span>
          <span className="p2-logo__txt">
            <b>{identity.fullName}</b>
            <span>{identity.role}</span>
          </span>
        </Link>

        <nav className="p2-foot__nav" aria-label="Footer">
          {P2_NAV.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="p2-foot__soc">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="p2-foot__bot">
        <span>
          &copy; {identity.fullName} · {identity.role}
        </span>
        <a href={`mailto:${contact.inbox}`}>{contact.inbox}</a>
      </div>
    </footer>
  );
}
