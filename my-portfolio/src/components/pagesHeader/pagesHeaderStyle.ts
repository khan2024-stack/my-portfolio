import { layout,typography } from "@/lib/central-styles"


export const headerStyle = {
  serviceheader: [
    layout.flex.center,
    layout.flex.col,
    "w-full max-w-3xl mx-auto pb-8 "
  ].join(" "),

  head1: [
    typography.heading[1],
    "w-full py-4 text-center ",
    "text-3xl md:text-4xl lg:text-5xl"
  ].join(" "),

  serviceTitle: [
    typography.paragraph.lg,
    "text-center",
    "text-sm md:text-base "
  ].join(" "),
}