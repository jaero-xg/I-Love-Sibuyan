/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"DM Sans"', "sans-serif"],
        mono: ['"DM Mono"', "monospace"],
      },
      colors: {
        sand: {
          50: "#faf8f5",
          100: "#f2ede4",
          200: "#e4d9c8",
          300: "#d0bc9a",
          400: "#b99870",
          500: "#a07c52",
          600: "#8a6340",
          700: "#6e4d32",
          800: "#5a3f2a",
          900: "#4a3424",
        },
        ocean: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7ac8fb",
          400: "#38aaf5",
          500: "#0e90e6",
          600: "#0272c4",
          700: "#035a9e",
          800: "#074d82",
          900: "#0c406c",
        },
        forest: {
          50: "#f2f9f2",
          100: "#e0f1e0",
          200: "#c1e4c1",
          300: "#92ce92",
          400: "#5cb25c",
          500: "#3a9a3a",
          600: "#2a7c2a",
          700: "#246224",
          800: "#214e21",
          900: "#1c401c",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "slide-left": "slideLeft 0.6s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
