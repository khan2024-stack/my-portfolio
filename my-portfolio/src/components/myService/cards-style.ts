import { layout, typography, colors, utilities } from "@/lib/central-styles";
import { color } from "framer-motion";

export const cardStyle = {
  cardMainWrapper: [
    layout.flex.col,
    layout.flex.start,
    "transition  h-100 md:h-88 duration-300 ease-in-out ",
    "hover:shadow-lg hover:scale-102 border border-gray-300 rounded-sm",
  ].join(" "),

  header: [
    layout.flex.start,
    typography.heading[6],
    colors.background.default,
    "h-18 p-2 rounded-t-lg",
    "w-full space-x-6 items-center",
  ].join(" "),

  cardTitle: [
    "h-10 w-full bg-gray-200 ",
    typography.base.text,
    layout.flex.center,
    "text-gray-600",
  ].join(" "),

  cardBody: [
    colors.background.default,
    "h-70 md:h-60  w-full p-6 text-sm ",
  ].join(" "),

  highlightListItem: [
    "flex flex-row items-start mb-2",
  ].join(" "),

  highlightIcon: [
    "w-2 h-2 mt-1.5 rounded-full bg-gray-900 flex-shrink-0 animate-pulse",
  ].join(" "),

  highlightText: [
    "ml-3",
  ].join(" "),
};