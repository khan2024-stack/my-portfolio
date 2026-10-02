"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { identity } from "@/app/portfolio-content/site-content";
import { NAV } from "./nav";

/**
 * Sticky paper header.
 *
 * Three things here are measured or stateful rather than declared, and
 * they are the difference between a header and a nav bar:
 *
 * 1. The active/hover indicator is ONE element whose left and width
 *    are set from `getBoundingClientRect()` on the real links, so it
 *    slides between items instead of each link owning a static
 *    underline. It follows the pointer on hover and springs back to
 *    the current page on leave.
 * 2. It re-measures on resize and on font load — a nav positioned from
 *    geometry measured before the webfont swaps in is wrong by a few
 *    pixels on every item, which is exactly the kind of drift that
 *    reads as "slightly off" without being obviously broken.
 * 3. The bar condenses and grows its rule only once the page has
 *    actually scrolled, so an unscrolled page has no border sitting
 *    there separating nothing.
 */
export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const indRef = useRef<HTMLSpanElement>(null);

  /* "/demo-2" is a prefix of every other route here, so it can only
     match exactly — otherwise Home would light up on all six pages. */
  const isOn = useCallback(
    (href: string) => (href === "/demo-2" ? path === href : path.startsWith(href)),
    [path],
  );

  /* Move the indicator to a given link, or back to the active one when
     passed null. Reads layout directly rather than tracking an index,
     so it stays correct however the nav wraps or resizes. */
  const move = useCallback((el?: HTMLElement | null) => {
    const nav = navRef.current;
    const ind = indRef.current;
    if (!nav || !ind) return;
    const target =
      el ?? (nav.querySelector<HTMLElement>("a.on") || undefined);
    if (!target) {
      ind.dataset.ready = "0";
      return;
    }
    const n = nav.getBoundingClientRect();
    const t = target.getBoundingClientRect();
    ind.style.left = `${t.left - n.left}px`;
    ind.style.width = `${t.width}px`;
    ind.dataset.ready = "1";
  }, []);

  useEffect(() => {
    move();
    const onResize = () => move();
    window.addEventListener("resize", onResize);
    /* Webfonts swap in after first paint and change every link's
       width — without this the indicator sits a few pixels off on
       every item until the first resize. */
    document.fonts?.ready.then(() => move());
    return () => window.removeEventListener("resize", onResize);
  }, [move, path]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  /* A route change while the drawer is open should close it, not leave
     it hanging over the new page. */
  useEffect(() => setOpen(false), [path]);

  return (
    <header className={`x-hdr${stuck ? " stuck" : ""}`}>
      <div className="x-hdr__in">
        <Link className="x-logo" href="/demo-2" aria-label="Home">
          <span className="x-mark" aria-hidden="true">
            {identity.shortName.charAt(0)}
          </span>
          <span className="x-logo__t">
            <b>{identity.fullName}</b>
            <span>{identity.role}</span>
          </span>
        </Link>

        <nav
          className="x-nav"
          aria-label="Main"
          ref={navRef}
          onMouseLeave={() => move()}
        >
          <span className="x-nav__ind" data-ready="0" ref={indRef} aria-hidden="true" />
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isOn(l.href) ? "on" : undefined}
              aria-current={isOn(l.href) ? "page" : undefined}
              onMouseEnter={(e) => move(e.currentTarget)}
              onFocus={(e) => move(e.currentTarget)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link className="x-btn x-btn--ink x-btn--sm" href="/demo-2/contact">
          Start a project <span aria-hidden="true">→</span>
        </Link>

        <button
          className="x-burger"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          <i />
          <i />
          <i />
        </button>
      </div>

      <div
        className={`x-scrim${open ? " on" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`x-drawer${open ? " on" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
      >
        <button
          className="x-drawer__x"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        {NAV.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={isOn(l.href) ? "on" : undefined}
            tabIndex={open ? 0 : -1}
          >
            {l.label}
          </Link>
        ))}
        <Link
          className="x-btn x-btn--ink"
          href="/demo-2/contact"
          style={{ marginTop: 20 }}
          tabIndex={open ? 0 : -1}
        >
          Start a project <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}
