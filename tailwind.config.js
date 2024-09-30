const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|link|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        customDark: "#080C0C",
        teal: "#0E6669",
        customBlue: "rgb(14 165 233)",
        dark: "#1E1E1E",
      },
    },
  },
  plugins: [nextui()],
};
