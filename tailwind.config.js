const { nextui, button } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|link|ripple|spinner).js",
  ],
  theme: {
    extend: {
      colors: {
        // customDark: "#243642",
        customDark: "#091020",
        customDark2: "#091020",
        teal: "#8E7AB5",
        customBlue: "rgb(14 165 233)",
        dark: "#1E1E1E",
        mycolo: "#053B48",
        success: "#052814",
        "custom-red": "#E55604",
        button: "#DC5F00",
      },
    },
  },
  plugins: [nextui()],
};
