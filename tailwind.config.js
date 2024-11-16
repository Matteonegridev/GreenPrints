/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        dark: "#272727",
        clearDark: "#3D3D3D",
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
            letterSpacing: "0.04em",
          },
        ],
        placeholder: [
          "1rem",
          {
            lineHeight: "1.8rem",
            letterSpacing: "0.08em",
          },
        ],
        xl: [
          "1.35rem",
          {
            lineHeight: "2rem",
            letterSpacing: "0.05em",
          },
        ],
        "2xl": [
          "1.563rem",
          {
            lineHeight: "2rem",
            letterSpacing: "0.04em",
          },
        ],
        "3xl": [
          "1.953rem",
          {
            lineHeight: "2rem",
            letterSpacing: "0.02em",
          },
        ],
        "4xl": [
          "2.441rem",
          {
            lineHeight: "2.2rem",
            letterSpacing: "0.02em",
          },
        ],
        "5xl": [
          "3.052rem",
          {
            lineHeight: "3.2rem",
            letterSpacing: "0.05em",
          },
        ],
        "6xl": ["3.815rem"],
      },
      fontFamily: {
        headings: "Noto Sans",
        heading2: "PT Sans Narrow",
        subHeadings: "Roboto Condensed",
        body: "Rubik",
      },
    },
  },
  plugins: [],
};
