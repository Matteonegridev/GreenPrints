/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        dark: "#272727",
        primary: "#50D890",
        secondary: "#4F98CA",
        accent: "#EFFFFB",
      },
    },
  },
  plugins: [],
};
