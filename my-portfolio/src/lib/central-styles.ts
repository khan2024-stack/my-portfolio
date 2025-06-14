// lib/central-style.ts

// ============== COLORS ==============
export const colors = {
  primary: {
    base: "text-emerald-600",
    light: "bg-emerald-100",
    dark: "bg-emerald-600",
    text: "text-emerald-600",
    bg: "bg-emerald-600",
    bgLight: "bg-emerald-100",
    hoverText: "hover:text-emerald-800",
    hoverBg: "hover:bg-emerald-700",
    border: "border-emerald-600",
  },
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
    textDark: "text-white",
    text: "text-gray-700",
    textLight: "text-gray-500",
    bgDark: "bg-gray-900",
    bg: "bg-gray-100",
    bgLight: "bg-gray-50",
    hoverText: "hover:text-gray-900",
    border: "border-gray-200",
  },
  background: {
    default: "bg-white",
    muted: "bg-gray-50",
    dark: "bg-gray-900",
  },
};


// ============== TYPOGRAPHY ==============
export const typography = {
  heading: {
    1: "text-4xl md:text-4.5xl lg:text-5xl xl:text-5xl font-extrabold font-bold tracking-wide",
    2: "text-3xl sm:text-2xl md:text-3xl lg:text-3.5xl xl:text-4xl 2xl:text-5xl   font-extrabold tracking-wide drop-shadow",
    3: "text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow",
    4: "text-xl md:text-2xl font-bold leading-snug tracking-wide drop-shadow",
    5: "text-lg md:text-xl font-bold ",
    6: "text-base md:text-lg font-bold leading-relaxed",
  },
  paragraph: {
    lg: "text-lg md:text-xl leading-relaxed",
    md: "text-base md:text-lg leading-relaxed",
    sm: "text-sm md:text-base leading-normal",
  },
  base: {
    text: "text-gray-700",
    link: "text-emerald-600 hover:text-emerald-800 underline",
  },
};

// ============== SPACING ==============
export const spacing = {
  px: {
    xs: "px-2",
    sm: "px-4",
    md: "px-6",
    lg: "px-8",
    xl: "px-12",
  },
  py: {
    xs: "py-2",
    sm: "py-4",
    md: "py-6",
    lg: "py-8",
    xl: "py-12",
  },
  gap: {
    xs: "gap-2",
    sm: "gap-3",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  },
  margin: {
    sm: "m-2",
    md: "m-4",
    lg: "m-6",
    xl: "m-8",
  },
};

// ============== LAYOUT ==============
export const layout = {
  container: {
    fluid: "w-full h-full px-4 px-6 lg:px-8 mx-auto",
    sm: "max-w-screen-sm mx-auto px-4 sm:px-6",
    md: "max-w-screen-md mx-auto px-4 sm:px-6",
    lg: "max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8",
    xl: "max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",
  },
  flex: {
    row: "flex flex-row",
    col: "flex flex-col",
    wrap: "flex-wrap",
    center: "flex items-center justify-center",
    around: "flex items-center justify-around",
    evenly: "flex items-center justify-evenly",
    between: "flex items-center justify-between",
    start: "flex items-center justify-start",
    end: "flex items-center justify-end",
  },
  grid: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
      4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    },
    gap: spacing.gap,
  },
};

// ============== UTILITY CLASSES ==============
export const utilities = {
  rounded: {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  },
  shadow: {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  },
  transition: {
    base: "transition duration-300",
    colors: "transition-colors duration-300",
    transform: "transition-transform duration-300",
    opacity: "transition-opacity duration-300",
  },
};


export const basicLayout = {
  main: "md:min-h-screen flex flex-col bg-gray-100 lg:flex-row w-full max-w-full px-2 py-2 sm:px-2 2xl:px-[15%]  ",
  childrenWrapper: "flex-1 w-full flex items-center justify-center bg-white [&>*]:max-w-full",
};




// ============== ANIMATION PRESETS ==============
