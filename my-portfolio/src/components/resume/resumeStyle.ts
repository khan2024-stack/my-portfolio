// resumeStyle.ts
import { layout, colors, spacing } from "@/lib/central-styles";

export const resumeStyle = {
  resumeMainWrapper: [
    layout.flex.col,
    spacing.py.xl,
    "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
  ].join(" "),

horizentalNevbar: [
  "w-full md:max-w-2xl bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-30",
  "border-b border-gray-200",
  "px-2 py-3",
  "overflow-x-auto scrollbar-hide",
  "scroll-px-4", 
  "max-w-full", 
  "md:flex items-center justify-center" 
].join(" "),



navButton: (isActive: boolean) =>
  [
    "px-4 py-2 rounded-full text-sm sm:text-base whitespace-nowrap",
    layout.flex.center,
    "border border-gray-200",
    "transition-colors duration-300",
    "min-w-[130px] text-center",
    isActive
      ? "bg-gradient-to-r from-indigo-500 to-black text-white shadow"
      : "bg-white text-gray-600 hover:text-gray-800",
  ].join(" "),


  sectionCard: [
    "relative bg-white/90 backdrop-blur-lg",
    "p-6 md:p-8",
    "transition-all duration-300",
  ].join(" "),
};
