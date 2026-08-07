"use client";

import { useEffect, useState } from "react";
import { identity, navLinks } from "@/app/portfolio-content/site-content";

/**
 * Sticky masthead. The underline follows whichever section is in view,
 * which is what makes a one-page site read as a site rather than a doc.
 */
export default function Header() {
  const [active, setActive] = useState(navLinks[0].id);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  return (
    <header className="top">
      <div className="top__in">
        <a className="logo" href="#top">
          {identity.shortName}
          <i>.</i>
        </a>

        <nav className="menu" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--fill" href="#contact">
          Start a project <span className="arw">→</span>
        </a>
      </div>
    </header>
  );
}
