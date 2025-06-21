"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "./ThemeProvider";

export default function Providers({ children }) {
  return (
    <ParallaxProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ParallaxProvider>
  );
}