/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        purple_color: "#7A5AF8",
        white_color: "#FFFFFF",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        dmSans: ["DM Sans ", "sans-serif"],
      },
    },
    screens: {},
  },
  plugins: [],
};
