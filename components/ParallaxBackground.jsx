"use client";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
export default function ParallaxBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      <Parallax speed={-10}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[60vh] bg-gradient-to-br from-blue-200 via-purple-300 to-white dark:from-black dark:via-blue-950 dark:to-black opacity-80 blur-3xl"
        />
      </Parallax>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute left-1/3 top-1/4 w-32 h-32 bg-blue-400/30 rounded-full blur-2xl"></div>
        <div className="absolute right-1/4 bottom-1/3 w-48 h-48 bg-purple-400/30 rounded-full blur-2xl"></div>
      </motion.div>
    </div>
  );
}
