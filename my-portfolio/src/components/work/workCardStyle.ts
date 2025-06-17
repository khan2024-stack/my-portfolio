import { layout, typography } from "@/lib/central-styles";

export const workCardStyle = {
  cardMainWrapper: [
    layout.flex.col,
    "transition duration-300 ease-in-out",
    "hover:shadow-lg hover:scale-[1.02]",
    "bg-white rounded-xl overflow-hidden border border-gray-200",
    "h-full w-full", 
  ].join(" "),

  imageContainer: [
    "relative w-full aspect-[16/9] bg-gray-50 group", 
  ].join(" "),

  cardContent: [
    "flex flex-col px-4 py-5 sm:px-6 sm:py-6 flex-grow",
  ].join(" "),

  title: [
    typography.heading[6],
    "text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg line-clamp-1",
  ].join(" "),

  description: [
    "text-sm sm:text-base text-gray-600 pb-4 sm:pb-6 line-clamp-3 flex-grow",
  ].join(" "),

  tagsContainer: [
    "flex flex-wrap gap-2 mt-auto pt-2",
  ].join(" "),

  tag: [
    "inline-flex items-center px-3 py-1 text-xs sm:text-sm font-medium font-semibold rounded-full",
    "bg-gray-100 text-gray-700 hover:bg-emerald-100 transition-colors",
  ].join(" "),
};
