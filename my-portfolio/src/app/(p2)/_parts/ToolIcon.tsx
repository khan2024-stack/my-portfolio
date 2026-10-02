import type { IconType } from "react-icons";
import {
  SiDocker,
  SiGooglegemini,
  SiPython,
  SiReact,
} from "react-icons/si";

/**
 * Their tools column pairs each row with the actual brand mark —
 * Figma, Webflow, VS Code, Framer, Elementor. These are the equivalent
 * for this site: one real logo per skill group, picked as the most
 * representative tool in that group's own stack list, so the mark and
 * the text underneath agree.
 *
 * `react-icons` was already a dependency, so this adds no new package.
 * Every export name here was checked against the installed
 * `react-icons/si` type definitions rather than guessed — a wrong name
 * is a build error, not a silent fallback.
 */
const ICONS: Record<string, IconType> = {
  Backend: SiPython,
  Frontend: SiReact,
  "AI & Voice": SiGooglegemini,
  DevOps: SiDocker,
};

export default function ToolIcon({ group }: { group: string }) {
  const Icon = ICONS[group];
  /* No icon mapped for a new skill group — fall back to the plain mark
     rather than rendering nothing and leaving the row misaligned. */
  if (!Icon) return <span className="p2-tools__mark" aria-hidden="true" />;
  return <Icon className="p2-tools__icon" aria-hidden="true" />;
}
