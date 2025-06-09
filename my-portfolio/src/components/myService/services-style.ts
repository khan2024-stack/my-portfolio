import { layout, typography, colors } from "@/lib/central-styles";

export const serviceStyle = {
    servicesMainWrapper: [
        layout.container.fluid,
        layout.flex.start,
        layout.flex.col,
        colors.background.muted,
        "px-0  md:px-4 pb-10"
    ].join(" "),

    serviceheader: [
        layout.flex.center,
        layout.flex.col,
        "w-full max-w-3xl mx-auto py-6"
    ].join(" "),

    head1: [
        typography.heading[1],
        "w-full py-4 text-center",
        "text-3xl md:text-4xl lg:text-5xl" 
    ].join(" "),

    serviceTitle: [
        typography.paragraph.lg,
        "text-center px-4",
        "text-sm md:text-base" 
    ].join(" "),

    serviceCards: [
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3", 
        "w-full max-w-7xl mx-auto",
        "gap-6 md:p-4 md:p-6", 
        "pb-10"
    ].join(" "),
}