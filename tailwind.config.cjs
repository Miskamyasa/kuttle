/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueDark: "#02163D",
        pink: "#FF00A1",
        gray1: "#828282",
        gray2: "#BDBDBD",
        gray3: "#F4F2F3",
      },
      keyframes: {
        infiniteBar: {
          "0%": {
            left: "0%",
            right: "100%",
            width: "0%",
          },
          "10%": {
            left: "0%",
            right: "75%",
            width: "25%",
          },
          "90%": {
            right: "0%",
            left: "75%",
            width: "25%",
          },
          "100%": {
            left: "100%",
            right: "0%",
            width: "0%",
          },
        },
      },
      animation: {
        infiniteBar: 'infiniteBar 2s linear infinite'
      },
    },
  },
  plugins: [],
}
