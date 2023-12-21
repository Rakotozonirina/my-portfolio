/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      'Marker' : ['Permanent Marker', 'cursive'],
      'Kalam' : ['Kalam', 'cursive'],
    }
  },
  plugins: [],
}

