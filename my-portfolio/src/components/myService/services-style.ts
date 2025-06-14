import { layout} from "@/lib/central-styles";

export const serviceStyle = {
    servicesMainWrapper: [
        layout.container.fluid,
        layout.flex.start,
        layout.flex.col,
        "py-10",
    ].join(" "),

    serviceCards: [
        layout.grid.cols[3],
        "w-full max-w-7xl mx-auto",
        "p-0 md:p-6 pb-10", 
    ].join(" "),
}