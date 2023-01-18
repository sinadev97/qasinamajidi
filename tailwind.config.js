/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          light: "#F7F8F9",
        },
        green: {
          DEFAULT: "#27AE60",
          dark: "#1e944f",
        },
      },

      boxShadow: {
        light: "0px 3px 50px -1px rgba(50, 50, 71, 0.05);",
      },
    },
  },
  plugins: [],
};
