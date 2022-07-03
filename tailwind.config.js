/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#3CD0FF',
        'secondary': '#69DBFF',
        'secondary_dark': '#128DFF',
        'big_secondary': '#C3C3C3',
      },
      fontFamily: {
        'ubuntu': ['"Ubuntu"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}