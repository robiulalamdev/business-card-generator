/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#475DF1",
        pd: "#1e34c9",
        BPM: "#475DF1",
      },
      container: {
        center: true,
        padding: "10px",
        screens: {
          "2xl": "1480px",
        },
      },
      fontFamily: {
        inter: ["Inter", "serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      display: ["group-focus", "group-hover"],
    },
  },
  plugins: [require("tailwindcss-all")],
});
