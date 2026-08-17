/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          brand: {
            black: "#0B0C10",
            gunmetal: "#1F2833",
            silver: "#C5C6C7",
            purple: "#3B82F6",
            violet: "#1D4ED8",
          },
        },
        fontFamily: {
          syne: ["Syne", "sans-serif"],
          grotesk: ["Space Grotesk", "sans-serif"],
        },
      },
    },
    plugins: [],
  };