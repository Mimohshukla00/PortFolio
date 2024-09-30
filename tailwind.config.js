/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customDark: "#080C0C",
        teal: "#0E6669",
        customBlue: "rgb(14 165 233)",
      },
    },
  },
  plugins: [],
};
