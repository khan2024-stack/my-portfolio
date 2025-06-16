// resumeStyle.ts (updated styles)
import { layout, colors, spacing } from "@/lib/central-styles";

export const resumeStyle = {
  resumeMainWrapper: [
    layout.flex.col,
    spacing.py.xl,
    "mx-auto",
  ].join(" "),

horizentalNevbar: [
  layout.flex.center,
  "bg-gray-100 shadow-sm",
  "w-full md:max-w-3xl px-2 py-2",
  "overflow-x-auto scrollbar-hide", // Hide scrollbar
  "snap-x snap-mandatory ", // Enable snap scrolling
].join(" "),

  navButton: (isActive: boolean) =>
    [
      "px-4 py-2 whitespace-nowrap",
      "rounded-md transition-all duration-300 text-sm sm:text-base sm:px-6",
      layout.flex.center,
      isActive ? `${colors.background.default} font-medium` : "text-gray-600 hover:text-gray-800",
    ].join(" "),

  sectionCard: [
    "backdrop-blur-sm p-6 rounded-2xl border border-gray-100",
    "bg-white/90"
  ].join(" "),
};