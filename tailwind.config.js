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
          darkBg: "#0a101b",
        },
        boxShadow: {
          glass: "0 8px 32px 0 rgba(31, 38, 135, 0.22)",
        },
      },
    },
    plugins: [],
  }
  