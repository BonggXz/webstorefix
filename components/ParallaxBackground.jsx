"use client";
import { Parallax } from "react-scroll-parallax";
export default function ParallaxBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Parallax speed={-10}>
        <div className="w-full h-96 bg-gradient-to-br from-blue-200 via-purple-300 to-white dark:from-black dark:via-blue-950 dark:to-black opacity-80 blur-3xl"></div>
      </Parallax>
    </div>
  );
}
