import type { IconType } from "react-icons";
import { FiLayers, FiLifeBuoy, FiMic, FiRefreshCw } from "react-icons/fi";

/**
 * Their service cards carry a large (150px) black line icon. These are
 * the equivalent for the three services — line icons in the same
 * outline weight, chosen to describe the work rather than a brand:
 * layered surfaces for platforms, a mic for voice systems, a refresh
 * loop for automation and CI/CD.
 *
 * `react-icons` was already a dependency. Every name here was checked
 * against the installed type definitions — a wrong one is a build
 * error, not a silent fallback.
 */
const ICONS: Record<string, IconType> = {
  "Web Platforms": FiLayers,
  "AI & Voice Systems": FiMic,
  "Automation & Infrastructure": FiRefreshCw,
  "Management & Support": FiLifeBuoy,
};

export default function ServiceIcon({ title }: { title: string }) {
  const Icon = ICONS[title];
  if (!Icon) return null;
  return <Icon className="p2-svc__icon" aria-hidden="true" />;
}
