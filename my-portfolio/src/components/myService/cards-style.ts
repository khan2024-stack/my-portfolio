import { layout, typography, colors, utilities } from "@/lib/central-styles";

export const cardStyle = {
  cardMainWrapper: [
    layout.flex.col,
    layout.flex.start,
    "transition  h-100 md:h-90 duration-300 ease-in-out ",
    "hover:shadow-lg hover:scale-102",
  ].join(" "),

  header: [
    layout.flex.start,
    typography.heading[6],
    colors.background.default,
    "h-18 p-2 rounded-t-lg border border-gray-300",
    "w-full space-x-6 items-center",
  ].join(" "),

  cardTitle: [
    "h-12 w-full",
    typography.base.text,
    layout.flex.center,
    colors.gray.text,
  ].join(" "),

  cardBody: [
    colors.background.default,
    "border border-gray-300 rounded-b-lg",
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