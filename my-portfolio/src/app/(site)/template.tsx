/**
 * The previous template wrapped every page in a `motion.main` that slid
 * in from -25vh. A CSS transform creates a containing block, which
 * breaks `position: sticky` on the header and interferes with anchor
 * scrolling — so on a single-page site it has to go.
 *
 * Section entrances are handled by the `.in` and `.rv` classes in
 * globals.css instead, which also respect prefers-reduced-motion.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
