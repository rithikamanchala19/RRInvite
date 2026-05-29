/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: '#8fc8d3',
        'dark-teal': '#5b9ead',
        brown: '#6f421f',
        pink: '#c0167a',
      },
      fontFamily: {
        serif: ['Tiro Devanagari Sanskrit', 'Cormorant Garamond', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
        accent: ['Yatra One', 'Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
