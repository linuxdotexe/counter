/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      accent: colors.red,
      primary: colors.slate,
      black: colors.black,
      transparent: colors.transparent,
    },
    extend: {
      fontFamily: {
        monos: ["Archivo", "sans-serif"],
      },
      keyframes: {
        flicker: {
          "0%": { opacity: 0.2 },
          "10%": { opacity: 0.3 },
          "20%": { opacity: 0.2 },
          "30%": { opacity: 0.3 },
          "75%": { opacity: 0.15 },
          "100%": { opacity: 1 },
        },
        flickerShortOne: {
          "0%": { opacity: 0.2 },
          "10%": { opacity: 0.5 },
          "20%": { opacity: 0.3 },
          "30%": { opacity: 0.5 },
          "75%": { opacity: 0.7 },
          "100%": { opacity: 1 },
        },
        flickerShortTwo: {
          "0%": { opacity: 0.5 },
          "10%": { opacity: 0.2 },
          "20%": { opacity: 0.3 },
          "30%": { opacity: 0.4 },
          "75%": { opacity: 0.8 },
          "100%": { opacity: 1 },
        },
        flickerHard: {
          "0%, 50%": { opacity: 0.2 },
          "10%, 70%, 100%": { opacity: 1 },
        },
        blink: {
          "0%, 25%": { opacity: 0.2 },
          "50%, 100%": { opacity: 1 },
        },
      },
      animation: {
        flicker: "flicker 1s cubic-bezier(0.3, 0.2, 0.2, 1.4)",
        blink: "blink 1s linear infinite",
        "flicker-short":
          "flickerShortOne 0.2s cubic-bezier(0.2, 0.3, 0.2, 1.4)",
        "flicker-short-alt":
          "flickerShortTwo 0.4s cubic-bezier(0.3, 0.2, 0.2, 1.4)",
        "flicker-hard": "flickerHard 0.8s linear",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
