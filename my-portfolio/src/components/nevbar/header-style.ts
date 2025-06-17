// lib/header.ts

import { 
  typography,
  spacing,
  layout,
  utilities
 } from '@/lib/central-styles';

export const header = {
  // Custom NavLink style – moved from central-style
  navLink: `
    relative inline-block px-3 py-2 text-sm font-bold
    after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px]
    after:w-0 after:bg-gray-500 after:transition-all after:duration-300
    hover:after:w-full hover:after:left-0
  `,

  // Social Link Button – custom button style for social icons
  socialLink: [
    "font-medium rounded-full shadow-md text-gray-700 hover:text-emerald-600",
    utilities.transition.transform,
    "hover:-translate-y-1",
    spacing.py.xs,
    spacing.px.sm
  ].join(" "),

// Base header styles (updated)
  base: [
    "absolute md:relative top-0 w-full z-50 backdrop-blur-sm bg-white/90 text-gray-900 ",
    utilities.transition.base
  ].join(" "),

  // Container for inner content
  container: [
    "2xl:px-[15%]",
    spacing.px.md,
    "flex items-center justify-between",
    "h-18 sticky"
  ].join(" "),

  // Logo section
  logo: {
    container: "flex-1",
    text: [
      typography.heading[3],
      "text-gray-800 hover:text-gray-700",
      utilities.transition.colors
    ].join(" ")
  },

  // Desktop navigation
  nav: {
    desktop: {
      container: [
        "hidden sm:flex flex-1 justify-center",
        spacing.gap.md
      ].join(" ")
    },
    mobile: {
      container: "sm:hidden",
      button: [
        "rounded-full p-2",
        "text-gray-600 hover:bg-gray-100",
        utilities.transition.colors
      ].join(" "),
      icon: "text-2xl"
    }
  },

  // Social icons section
  social: {
    container: "flex items-center space-x-4 md:space-x-6",
    link: "text-gray-700 hover:text-emerald-600 transition-colors",
    icon: "text-lg sm:text-xl"
  },

  // Mobile menu drawer
  mobileMenu: {
    overlay: [
      "fixed inset-0 z-40",
      "bg-black/30 backdrop-blur-sm"
    ].join(" "),
    drawer: [
      "bg-white shadow-lg",
      "fixed top-0 right-0 h-full w-80 z-50 flex flex-col",
      utilities.transition.transform
    ].join(" "),
    header: [
      layout.flex.between,
      spacing.px.md,
      spacing.py.sm,
      "bg-white border-b border-gray-100"
    ].join(" "),
    nav: [
      "flex flex-col flex-grow p-4 bg-white",
      spacing.gap.sm
    ].join(" "),
    navItem: [
      "block px-4 py-3 text-lg font-medium text-gray-800 rounded-lg",
      "hover:bg-gray-50",
      utilities.transition.colors
    ].join(" "),
    footer: [
      spacing.px.md,
      spacing.py.md,
      "bg-gray-50 border-t border-gray-100"
    ].join(" "),
    footerText: [
      typography.paragraph.sm,
      "font-medium text-gray-600 mb-4"
    ].join(" "),
    blurOverlay: [
      "fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col",
      "backdrop-blur-md"
    ].join(" "),
    blurAnimation: {
      initial: { filter: 'blur(0px)' },
      animate: { filter: 'blur(8px)' },
      exit: { filter: 'blur(0px)' },
      transition: { duration: 0.3 }
    }
  },

  // 🔥 New: Framer Motion-compatible animation variants
  animations: {
    logo: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      transition: { type: "spring", stiffness: 120, damping: 10 }
    },
    desktopNav: {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      transition: { staggerChildren: 0.05 }
    },
    slideIn: {
      initial: { x: "100%" },
      animate: { x: 0 },
      exit: { x: "100%" },
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 }
    }
  }
};