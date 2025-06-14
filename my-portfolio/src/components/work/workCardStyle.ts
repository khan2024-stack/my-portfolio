import { layout, typography} from "@/lib/central-styles";


export const workCardStyle = {
  cardMainWrapper: [
    layout.flex.col,
    "transition duration-300 ease-in-out",
    "hover:shadow-lg hover:scale-102",
    "bg-white rounded-xl overflow-hidden  border border-gray-300",
  ].join(" "),

  imageContainer: [
    "relative h-52 overflow-hidden bg-gray-50 group",
  ].join(" "),

  cardContent: [
    "flex flex-col p-6 flex-grow",
  ].join(" "),

  title: [
    typography.heading[6],
    "text-gray-900 mb-3 line-clamp-1",
  ].join(" "),

  description: [
    "text-sm text-gray-600 pb-6 line-clamp-3 flex-grow",
  ].join(" "),

  tagsContainer: [
    "flex flex-wrap gap-2 mb-4 pt-4",
  ].join(" "),

  tag: [
    "inline-flex items-center px-3 py-1 text-xs font-medium font-semibold rounded-full",
    "bg-gray-100 text-gray-700 hover:bg-emerald-100 transition-colors",
  ].join(" "),
};
