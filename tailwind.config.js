/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      boxShadow: {
        xl: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        sm: { max: "767px" },
        lg: { min: "544px", max: "768px" },
        xl: { min: "1012px" },
        "2xl": { min: "1403px" },
      },
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
        faq: [
          "1.25rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.05em",
          },
        ],
        faq2x: [
          "1.563rem",
          {
            lineHeight: "1.5rem",
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
        "6xl": [
          "3.815rem",
          {
            lineHeight: "4rem",
            letterSpacing: "0.03em",
          },
        ],
      },
      fontFamily: {
        headings: "Noto Sans",
        subheading: "PT Sans Narrow",
        title: "Gasoek One",
        body: "Rubik",
      },
      width: {
        footerWidth: "calc(100% + 1.3px)",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        html: {
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
          "text-rendering": "optimizeLegibility",
        },
      });
    },
  ],
};
