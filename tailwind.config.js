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
        tertiary: "#F06543",
        accent: "#EFFFFB",
      },
      fontSize: {
        sm: "0.8rem",
        base: [
          "1rem",
          {
            lineHeight: "1.8rem",
            letterSpacing: "0.03em",
          },
        ],
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": [
          "1.953rem",
          {
            lineHeight: "2rem",
            letterSpacing: "0.2em",
          },
        ],
        "4xl": "2.441rem",
        "5xl": [
          "3.052rem",
          {
            lineHeight: "3.2rem",
            letterSpacing: "0.1em",
          },
        ],
        "6xl": ["3.815rem"],
      },
      fontFamily: {
        headings: "Noto Sans",
        subHeadings: "Roboto Condensed",
        body: "Rubik",
      },
    },
  },
  plugins: [],
};
