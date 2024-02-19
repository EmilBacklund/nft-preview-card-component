/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        darkBlue: "#0D192C",
        cardBlue: "#15263F",
        softBlue: "#8BACD9",
        cyan: "#00FFF8",
        dividerBlue: "#2E405A",
      },
    },
  },
  plugins: [],
};
