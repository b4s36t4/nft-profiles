/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Zen Dots", "cursive"],
      },
    },
    colors: {
      background: "#FDF8F8",
      buttonBackground: "#2A4C54",
      white: "#ffffff",
    },
    letterSpacing: {
      widest: "0.2em",
    },
  },
  plugins: [],
};
