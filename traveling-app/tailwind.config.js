/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBackground:"#0C111F",
        brightColor:"#F9EC7D",
      }
    },
  },
  plugins: [],
}