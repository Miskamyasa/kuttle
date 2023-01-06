/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueDark: "#02163D",
        gray1: "#828282",
        gray2: "#BDBDBD",
        gray3: "#F4F2F3",
      },
    },
  },
  plugins: [],
}
