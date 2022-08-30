/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./src/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        bgmain: "#121212",
        main: "#202020",
      },
    },
  },
  plugins: [],
};
