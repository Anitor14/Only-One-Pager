/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        purple_color: "#7A5AF8",
        white_color: "#FFFFFF",
        border_color: "#DADADA",
        black_color: "#171717",
        light_purple_color: "#E5DEFF",
        light_gray_color: "#8F8F8F",
        background_grey_color: "#FAFAFA",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        dmSans: ["DM Sans ", "sans-serif"],
      },
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("prettier-plugin-tailwindcss")],
};
