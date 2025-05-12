"use client";
import { motion } from "framer-motion";

const pageTransition = {
  hidden: {
    y: "-25vh", // Starts slightly above the viewport
    opacity: 0.6,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      velocity: 2
    }
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      mass: 0.5,
      velocity: 0
    }
  },
  exit: {
    y: "25vh", // Exits slightly below the viewport
    opacity: 0.6,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      mass: 0.5
    }
  }
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={pageTransition}
      style={{
        transformOrigin: "top center", // Creates natural arc motion
        willChange: "transform, opacity" // Performance optimization
      }}
    >
      {children}
    </motion.main>
  );
}