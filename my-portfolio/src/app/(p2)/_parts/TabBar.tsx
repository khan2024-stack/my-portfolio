"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBriefcase, FiFileText, FiGrid, FiHome, FiMessageCircle } from "react-icons/fi";

/**
 * Bottom tab bar — phones only (hidden above 680px in CSS).
 *
 * The five places a visitor actually goes, one thumb-reach from the
 * bottom of the screen, like a native app. The header's menu button
 * still opens the full menu with the call to action and contact links.
 */
const TABS = [
  { href: "/", label: "Home", Icon: FiHome },
  { href: "/work", label: "Work", Icon: FiGrid },
  { href: "/services", label: "Services", Icon: FiBriefcase },
  { href: "/resume", label: "Resume", Icon: FiFileText },
  { href: "/contact", label: "Contact", Icon: FiMessageCircle },
] as const;

export default function TabBar() {
  const path = usePathname() ?? "/";
  const isOn = (href: string) =>
    href === "/" ? path === "/" : path === href || path.startsWith(href + "/");

  return (
    <nav className="p2-tabs" aria-label="Quick navigation">
      {TABS.map(({ href, label, Icon }) => {
        const on = isOn(href);
        return (
          <Link
            key={href}
            href={href}
            className={on ? "is-on" : undefined}
            aria-current={on ? "page" : undefined}
          >
            <span className="p2-tabs__ico" aria-hidden="true">
              <Icon />
            </span>
            <span className="p2-tabs__lbl">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
