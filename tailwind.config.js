/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        dino: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100vw)" },
        },
        dino2: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(350px)" },
        },
      },
      animation: {
        cycle: "dino 20s linear infinite",
        cycle2: "dino2 20s linear infinite",
      },
    },
    backgroundImage: {
      BgBtnJoin: "url(/src/assets/image/bg-btn.webp)",
    },
    backgroundSize: {
      Bgsize: "100% 100%",
    },
  },
  plugins: [],
};
