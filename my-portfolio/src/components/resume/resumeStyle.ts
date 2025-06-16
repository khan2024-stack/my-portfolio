// resumeStyle.ts
import { layout, colors, spacing } from "@/lib/central-styles";

export const resumeStyle = {
  resumeMainWrapper: [
    layout.flex.col,
    spacing.py.xl,
  ].join(" "),

  horizentalNevbar: [
    layout.flex.center,
    "bg-gray-100 shadow-sm",
    "h-14",
  ].join(" "),

  // Individual nav button style
  navButton: (isActive: boolean) =>
    [
      "w-40 py-2 whitespace-nowrap text-center",
      "rounded-md transition-all duration-300 ",
          layout.flex.center,
      isActive ? `${colors.background.default}` : "",
    ].join(" "),

  sectionCard: [
    "backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm",
  ].join(" "),
};