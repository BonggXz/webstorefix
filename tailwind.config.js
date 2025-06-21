/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          neon: "#8ecafe",
          purple: "#7b8fff",
          darkBg: "#0a101b",
          darkBgSoft: "#131a24",
          muted: "#64748b",
        },
        boxShadow: {
          glass: "0 8px 32px 0 rgba(31, 38, 135, 0.22)",
          neon: "0 8px 32px 0 rgba(142, 202, 254, 0.2)",
        },
      },
    },
    plugins: [],
  }
  