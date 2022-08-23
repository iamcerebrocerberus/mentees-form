/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./index.html"],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat", "san-serif"],
    },
    minWidth: {
      442: "27.625rem",
      22: "21.625rem",
      1040: "65rem",
      1080: "67.5rem",
    },
    maxWidth: {
      22: "21.625rem",
      1080: "67.5rem",
      1040: "65rem",
    },
    screens: {
      sm: "27.8125em",
      md: "50.75em",
      md2: "54.375em",
      lg: "67.5em",
      lg1: "65em",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
