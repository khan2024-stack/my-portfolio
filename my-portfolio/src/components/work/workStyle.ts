import { layout } from "@/lib/central-styles";

export const workStyle = {
  workMainWrapper: [
    layout.container.fluid,
    layout.flex.start,
    layout.flex.col,
    "py-10 ",
  ].join(" "),

  workCards: [
    layout.grid.cols[3],
    "w-full max-w-7xl mx-auto",
    "p-0 md:p-6 pb-10",
  ].join(" "),
};