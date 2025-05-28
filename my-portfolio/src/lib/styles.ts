// lib/styles.ts

export const card = {
    base: "bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-200 flex flex-col h-full transition-all duration-300",
    imageContainer: "relative h-52 overflow-hidden bg-gray-50 group",
    imageStyle: "object-cover transform transition-transform duration-500 group-hover:scale-105",
    contentWrapper: "flex flex-col p-6 flex-grow",
    title: "text-xl font-semibold text-gray-900 mb-3 line-clamp-1",
    description: "text-sm text-gray-600 mb-5 line-clamp-3 flex-grow",
  };
  
  export const videoOverlay = {
    container: "absolute inset-0 flex items-center justify-center z-10",
    button: "flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-110",
  };
  
  export const tag = {
    base: "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors",
  };
  
  export const navLink = `
    relative inline-block px-3 py-2 text-sm font-bold text-gray-700 transition-colors
    duration-300 hover:text-gray-800
    after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px]
    after:w-0 after:bg-gray-500 after:transition-all after:duration-300
    hover:after:w-full hover:after:left-0
  `;
  
  export const socialLink = "p-2 rounded-full bg-white shadow hover:shadow-md text-gray-700 transition-all hover:-translate-y-1 text-lg sm:text-xl";
  
  export const button = {
    primary: "px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:shadow-lg transition-all hover:scale-105",
    downloadCV: `
    /* FORCE DISPLAY (mobile fix) */
    !inline-flex !visible !opacity-100
    
    /* LAYOUT */
    items-center justify-center
    gap-2
    w-full xs:w-auto
    min-w-[160px]
    max-w-[180px]
    mx-auto sm:mx-0
    
    /* YOUR GRADIENT COLORS */
    bg-black from-emerald-500 to-teal-600
    text-white
    
    /* SIZING */
    px-6 py-3.5
    rounded-full
    
    /* TEXT */
    text-sm sm:text-[0.95rem]
    font-medium
    whitespace-nowrap
    
    /* EFFECTS */
    shadow-md
    hover:shadow-lg
    transform
    transition-all
    duration-200
    hover:scale-[1.03]
    active:scale-[0.98]
    
    border-2 border-transparent
  `,
  };
  
  export const heading = {
    primary: "text-4xl md:text-4.5xl lg:text-5xl xl:text-5xl font-bold tracking-wide  text-gray-800",
    name: "text-3xl sm:text-2xl md:text-3xl lg:text-3.5xl xl:text-4xl 2xl:text-5xl font-extrabold text-gray-800 mb-4 tracking-wide drop-shadow",
    section: "text-2xl font-semibold text-gray-800",
    sectionWithGradient: "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-black from-gray-900 via-gray-700 to-emerald-600",
  };
  
  export const paragraph = {
    base: "text-xl text-gray-700", // Simple visible version
    resumeSummary: "text-gray-600 mt-2 max-w-3xl leading-relaxed",
  };
  
  export const profileImage = {
    container: "relative rounded-full overflow-hidden shadow-2xl border-4 border-emerald-500 z-10 animate-border-glow w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] xl:w-[28rem] xl:h-[28rem] 2xl:w-[30rem] 2xl:h-[30rem]",
    glow: "absolute rounded-full blur-3xl opacity-30 z-0 animate-pulse w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] xl:w-[32rem] xl:h-[32rem] 2xl:w-[36rem] 2xl:h-[36rem] bg-emerald-300",
  };
  export const imageSection = {
    wrapper: "flex flex-col items-center justify-center",
    container: "relative w-full   md:h-[26rem] h-[14rem]  max-w-lg flex items-center justify-center",
  };
  
  export const contact = {
    input: "w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-500",
    textarea: "w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-500",
    label: "block text-sm font-medium text-gray-700 mb-1",
    submitButton: "px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:shadow-lg transition-all hover:scale-105",
    infoCard: "flex items-start space-x-4",
    infoIcon: "p-3 bg-emerald-100 rounded-full text-emerald-600",
    infoTitle: "text-lg font-medium text-gray-800",
    infoDescription: "text-gray-600",
  };
  
  export const resume = {
    sectionCard: "backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm",
    sidebar: "bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100",
    sidebarButtonBase: "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
    sidebarButtonActive: "bg-emerald-500 text-white shadow-sm",
    sidebarButtonInactive: "bg-white text-gray-700 border border-gray-200 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200",
  };
  
  export const skillsCard = {
    base: "bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300",
    categoryTitle: "text-lg font-semibold text-gray-800 mb-4 flex items-center",
    categoryDot: "w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2",
    skillItem: "flex items-center text-gray-700",
    skillDot: "w-2 h-2 bg-emerald-400 rounded-full mr-3",
  };
  
  export const experienceCard = {
    base: "group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border-t-[3px] border-emerald-400",
    position: "text-xl font-semibold text-gray-800",
    company: "text-emerald-600 font-medium mt-1",
  };
  
  export const educationCard = {
    ...experienceCard,
  };
  
  export const aboutCard = {
    base: "group bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-emerald-500",
    iconCircle: "w-10 h-10 flex items-center justify-center bg-emerald-50 rounded-full",
    label: "font-semibold text-gray-800",
    value: "text-gray-600 mt-1 leading-relaxed",
    listItem: "flex items-start",
    iconMargin: "flex-shrink-0 mt-1 mr-4",
  };
  
  export const actionBar = {
    container: "mt-4 sm:mt-10 flex sm:flex-row justify-center sm:justify-between items-center w-full max-w-lg mx-auto gap-4 sm:gap-5 md:gap-0",
    downloadButton: button.primary,
    socialLink: socialLink,
  };
  
  export const page = {
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
    header: {
      wrapper: "text-center mb-10",
      title: "text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight",
      subtitle: "text-lg md:text-xl text-gray-600 max-w-2xl mx-auto",
    },
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10",
  };
  
  export const premiumBadge = "inline-block bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-600 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 tracking-wider shadow-sm";
  
  export const sectionHeader = {
    title: heading.sectionWithGradient,
    subtitle: paragraph.base,
    badge: premiumBadge,
  };
  
  export const services = {
    card: card.base,
    cardHoverGlow: "absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300",
    cardBlurGlow: "absolute -inset-1 bg-gradient-to-r from-emerald-100/30 to-teal-100/30 blur-md rounded-xl",
    accentLine: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
    iconContainer: "flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-600 mr-4 group-hover:rotate-6 transition-transform duration-300 shadow-inner",
  };
  
  export const basicLayout = {
    main: "md:min-h-screen flex flex-col bg-gray-300 lg:flex-row w-full max-w-full px-2 py-2 sm:px-2 2xl:px-[12%] bg-gray-50",
    childrenWrapper: "flex-1 w-full flex items-center justify-center bg-white [&>*]:max-w-full",
  };
  
  // ✨ New Layout Styles Here!
  export const layout = {
    // Grid
    grid: {
      threeCol: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10",
      twoCol: "grid grid-cols-1 md:grid-cols-2 gap-8",
      oneCol: "grid grid-cols-1 gap-8",
    },
  
    // Flexbox
    flex: {
      row: "flex flex-row ",
      col: "flex flex-col",
      between: "justify-between",
      center: "justify-center",
      start: "justify-start",
      end: "justify-end",
      alignCenter: "items-center",
      alignStart: "items-start",
      alignEnd: "items-end",
      wrap: "flex-wrap",
      noWrap: "flex-nowrap",
      gap: {
        xs: "gap-2",
        sm: "gap-3",
        md: "gap-4",
        lg: "gap-6",
        xl: "gap-8",
      },
      gapX: {
        sm: "gap-x-3",
        md: "gap-x-4",
        lg: "gap-x-6",
      },
      gapY: {
        sm: "gap-y-3",
        md: "gap-y-4",
        lg: "gap-y-6",
      },
      paddedContainer: "px-4 sm:px-6 lg:px-8 py-12",
      centered: "flex items-center justify-center",
      spaced: "flex justify-between items-center",
    },
  
    // Container & Spacing
    container: {
      fluid: "w-full max-w-full",
      default: "max-w-7xl mx-auto",
      narrow: "max-w-3xl mx-auto",
      wide: "max-w-6xl mx-auto",
      inner: "px-4 sm:px-6 lg:px-8 py-12 sm:py-16",
    },
  
    // Padding / Margin
    spacing: {
      px: {
        sm: "px-4 sm:px-6 lg:px-8",
        md: "px-6 sm:px-8 lg:px-10",
        lg: "px-8 sm:px-10 lg:px-12",
      },
      p: {
        sm: "p-4 sm:p-6 lg:p-8",
        md: "p-6 sm:p-8 lg:p-10",
        lg: "p-8 sm:p-10 lg:p-12",
      },
      py: {
        sm: "py-6 sm:py-8",
        md: "py-8 sm:py-12",
        lg: "py-12 sm:py-16",
      },
      m: {
        auto: "mx-auto",
        xAuto: "mx-auto",
        yAuto: "my-auto",
      },
      mt: {
        sm: "mt-4 sm:mt-6 lg:mt-8",
        md: "mt-2 sm:mt-4 lg:mt-12",
        lg: "mt-12 sm:mt-16 lg:mt-20",
      },
      mb: {
        sm: "mb-4 sm:mb-6 lg:mb-8",
        md: "mb-8 sm:mb-10 lg:mb-12",
        lg: "mb-12 sm:mb-16 lg:mb-20",
      },
    },
  
    // Responsive Wrappers
    wrapper: {
      page: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16",
      section: "px-4 sm:px-6 lg:px-8",
      inner: "px-4 sm:px-6 lg:px-8 py-6 sm:py-8",
    },
  };


