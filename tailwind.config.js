/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage:{
      "bgheader":"url(/src/assets/image/bgheaderr.webp)",
      "BgBtnJoin":"url(/src/assets/image/bg-btn.png)",
    },
  },
  plugins: [],
}