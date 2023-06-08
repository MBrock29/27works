/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        4.25: "17px",
        25: "100px",
      },
      colors: {
        yellow: "#F2CB13",
        darkGold: "#7B6709",
        orange: "#FF0036",
        grey: "#B1B3B3",
      },
    },
  },
  plugins: [],
};
