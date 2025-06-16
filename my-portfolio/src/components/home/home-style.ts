import { layout, spacing, typography, utilities, colors } from "@/lib/central-styles";

export const homepage = {
    wrapper: [
        "h-full",
        "p-[7vh]",
        "w-full",
        layout.container.fluid,
    ].join(" "),

    row: [
        layout.flex.col,
        spacing.py.sm,
        "md:flex-row",
        "w-full",
        "h-full",
    ].join(" "),

    section: {
        left: [
            "h-full",
            "flex-none md:flex-1",
            layout.flex.center,
            "order-2 md:order-none",
        ].join(" "),
        right: [
            "h-[50vh] sm:h-[50vh] md:h-full",
            "flex-none md:flex-1",
            layout.flex.center,
            "order-1 md:order-none",
        ].join(" "),
    },

    introSection: {
        mainWrapper: [
            layout.flex.col,
            layout.flex.end,
            spacing.py.md,
            "pl-0 md:p-8 w-full text-center",
        ].join(" "),
        h4: [
            typography.heading[4],
            "p-0 md:p-3",
        ].join(" "),
        h3: [
            typography.heading[3],
            "",
        ].join(" "),
        h2: [
            typography.heading[2],
            "p-1 md:p-3",
        ].join(" "),
        p: [
            typography.paragraph.md,
            colors.gray.text,
            "text-justify pt-6 md:pt-8",
        ].join(" "),
    },

    actionBar: {
        mainWrapper: [
            layout.flex.around,
            "w-full",
            "mt-8",
            colors.gray.border,
            "border-t pt-6",
            "gap-6 md:gap-12",
        ].join(" "),
        button: [
            "px-3 py-3 md:px-6",
            "rounded-sm",
            colors.gray.textDark,
            colors.gray.bgDark,
            colors.primary.hoverBg,
            spacing.gap.sm,
            layout.flex.center,
            utilities.transition.colors,
        ].join(" "),
        socialIcons: [
            layout.flex.row,
            "gap-4 md:gap-5",
        ].join(" "),
        socialLink: [
            colors.gray.text,
            colors.primary.hoverText, // hover:text-emerald-600
            "transition-colors p-1 md:p-2 rounded-full shadow",
            "text-xl md:text-2xl",
        ].join(" "),
    },

    imageSection: {
        imageWrapper: [
            layout.flex.center,
        ].join(" "),
        imageContainer: [
            layout.flex.center,
            "w-66 h-66 md:w-100 md:h-100",
            colors.primary.border, // border-emerald-800
            "border-4",
            "rounded-sm",
            "overflow-hidden",
        ].join(" "),
        glow: [
            "absolute blur-3xl opacity-30 z-0 animate-pulse w-66 h-66 2xl:w-[36rem] 2xl:h-[36rem]",
            "bg-emerald-200", // optional: centralize if reused
        ].join(" "),
        imageCard: [
            "relative w-full  md:h-[25rem] h-[18rem] max-w-lg",
            layout.flex.center,
        ].join(" "),
    },

};
