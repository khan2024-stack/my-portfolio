// app/(demo2)/layout.tsx — root layout for the demo-2 portfolio.
//
// Its own root layout, not nested inside (p2): this design has a
// different ground, a different type pairing and its own header and
// footer, so sitting inside another route group's <body> would inherit
// the wrong paper and the wrong display face.
//
// Deliberately NOT the North language. The portfolio at / is a port of
// an Elementor template kit — cream ground, lime accent, hairline bento
// cells. This is the opposite argument: a light "technical paper"
// system, numbered sections, blueprint-blue ink, and two live canvases
// that no page builder ships.
import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter_Tight, JetBrains_Mono } from "next/font/google";

import "../globals.css";
import "./demo-2/demo2.css";
import Header from "./demo-2/_parts/Header";
import Footer from "./demo-2/_parts/Footer";

/* Bricolage Grotesque carries the display voice — a variable grotesque
   with enough character to look art-directed rather than defaulted,
   picked against Space Grotesk so this reads as a different studio's
   work and not a re-skin of the portfolio. Inter Tight sets body copy
   at a slightly narrower width than plain Inter, which keeps long
   measures readable without dropping the size. JetBrains Mono carries
   every figure: real tabular numerals, so readouts and tables do not
   reflow their own width as digits change. */
const display = Bricolage_Grotesque({
  variable: "--x-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const body = Inter_Tight({
  variable: "--x-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const mono = JetBrains_Mono({
  variable: "--x-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Sajjad — Full Stack & AI Engineer",
    template: "%s · Muhammad Sajjad",
  },
  description:
    "Full stack and AI engineer building in production since 2017 — Django and FastAPI backends, TypeScript frontends, and AI voice agents answering live calls.",
  /* A demo build running alongside the live portfolio — keeping it out
     of search stops the two competing for the same queries. */
  robots: { index: false, follow: false },
};

export default function Demo2RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`x-root ${display.variable} ${body.variable} ${mono.variable}`}
      >
        <div className="x">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
