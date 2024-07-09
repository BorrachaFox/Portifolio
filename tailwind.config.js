/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['lato', 'sans-serif'],
      'bebas': ['bebas neue', 'sans-serif'],
    },
    extend: {
      colors: {
        1: '#1A1A1A',
        2: '#161616',
        3: '#8465FF',
        4: '#FFFFFF',
      }
    },
  },
  plugins: [],
}
