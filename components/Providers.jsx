"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "./ThemeProvider";

export default function Providers({ children }) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <ParallaxProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ParallaxProvider>
    </GoogleOAuthProvider>
  );
}
