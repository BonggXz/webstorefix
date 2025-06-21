"use client";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.85 }}
      className="rounded-full p-2 shadow-xl glass transition"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <MoonIcon className="w-6 h-6 text-neon" />
      ) : (
        <SunIcon className="w-6 h-6 text-blue-500" />
      )}
    </motion.button>
  );
}
