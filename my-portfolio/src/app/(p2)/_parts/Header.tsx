"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact, identity, socials } from "@/app/portfolio-content/site-content";
import { P2_NAV } from "./nav";

/**
 * Their header, measured: 115px tall, a 1px black bottom border, the
 * logo mark on the left, inline nav in the middle — Inter 16px weight
 * 600, 10px 20px padding — and on the right a text link beside a 50×50
 * black square carrying an arrow icon.
 *
 * Below 1000px their own header swaps to a hamburger toggle
 * (`hfe-nav-menu__toggle`, confirmed in their markup) rather than just
 * hiding the nav. This had been `display: none` with nothing standing
 * in for it — on any window narrower than 1000px CSS pixels the whole
 * middle of the header went empty, logo on one side and "Let's talk"
 * stranded on the other with a dead gap between them. That reads as
 * "the header isn't full width" even though the bar itself always was;
 * it's the content inside it that stopped filling the space.
 */
export default function P2Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // A route change while the menu is open should close it, not leave
  // it hanging open over the new page.
  useEffect(() => setOpen(false), [path]);

  // Reading progress for the lime bar under the header. One rAF-throttled
  // passive listener; writes a single CSS variable, no re-renders.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, el.scrollTop / max)) : 0;
      el.style.setProperty("--p2-progress", p.toFixed(4));
      // Lets CSS keep the floating chat button off the landing screen.
      el.toggleAttribute("data-scrolled", el.scrollTop > 120);
      // Hide the floating chat button while the contact form is on screen
      // (it has its own WhatsApp button, and on phones the float would sit
      // on top of "Send message").
      const panel = document.querySelector(".p2-reach__panel");
      const r = panel?.getBoundingClientRect();
      el.toggleAttribute(
        "data-form-visible",
        !!r && r.top < window.innerHeight && r.bottom > 0,
      );
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [path]);

  return (
    <header className="p2-hdr">
      <div className="p2-bar">
        <Link className="p2-logo" href="/">
          <span className="p2-logo__mark" aria-hidden="true">
            {identity.shortName.charAt(0)}
            <i>.</i>
          </span>
          <span className="p2-logo__txt">
            <b>{identity.fullName}</b>
            <span>{identity.role}</span>
          </span>
        </Link>

        <nav className="p2-nav" aria-label="Main">
          {P2_NAV.map((l) => {
            const on =
              l.href === "/"
                ? path === l.href
                : path.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={on ? "is-on" : undefined}
                aria-current={on ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="p2-hdr__cta">
          <Link href="/contact">Let&rsquo;s talk</Link>
          <Link
            className="p2-hdr__arrow"
            href="/contact"
            aria-label="Get in touch"
          >
            &#8599;
          </Link>
        </div>

        <button
          className="p2-burger"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`p2-mscrim${open ? " is-on" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`p2-mmenu${open ? " is-on" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
      >
        <div className="p2-mmenu__head">
          <b>{identity.fullName}</b>
          <span>{identity.role}</span>
        </div>
        <button
          className="p2-mmenu__close"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <nav aria-label="Main, mobile">
          {P2_NAV.map((l) => {
            const on =
              l.href === "/"
                ? path === l.href
                : path.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={on ? "is-on" : undefined}
                aria-current={on ? "page" : undefined}
                tabIndex={open ? 0 : -1}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        {/* Pinned to the bottom of the panel so it is always on screen —
            it used to sit below the fold on short phones. */}
        <div className="p2-mmenu__foot">
          <Link
            className="p2-mmenu__cta"
            href="/contact"
            tabIndex={open ? 0 : -1}
          >
            Let&rsquo;s talk &#8599;
          </Link>
          <div className="p2-mmenu__links">
            <a href={`mailto:${contact.inbox}`} tabIndex={open ? 0 : -1}>
              Email
            </a>
            <a
              href={`https://wa.me/${contact.whatsapp.digits}`}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
            >
              WhatsApp
            </a>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
