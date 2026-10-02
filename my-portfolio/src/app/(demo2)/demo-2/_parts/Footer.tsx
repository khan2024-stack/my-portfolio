import Link from "next/link";
import { identity, socials } from "@/app/portfolio-content/site-content";
import { NAV } from "./nav";

export default function Footer() {
  return (
    <footer className="x-foot">
      <div className="x-foot__in">
        <span>
          {identity.fullName} · {identity.location}
        </span>
        <span>· demo build, not indexed</span>
        <nav aria-label="Footer">
          {NAV.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
