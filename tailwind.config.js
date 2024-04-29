/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 10px 30px -10px rgba(0,0,0,0.7)",
        xxxl: "0px 3px 16px 5px rgba(0,0,0,0.3)",
        stylish: "0px 5px 20px 1px rgba(0,0,0,0.4)",
      },
      colors: {
        primary: "#282C34",
        secondary: "#50AFEF",
        tertiary: '#D3C07B',
        fourth: '#C678DD',
        fifth: '#E06C75',
        sixth: '#98C379' ,
        primary_dark: "#21252B",
        primary_light: "#4D515A",
        brackets: "#73DACA",
        text: "#9ECE6A",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
