/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'rethink': ['Rethink Sans', 'sans-serif'],
        'nemek' : ['Nemek Gothic', 'black'],
        'work': ['Work Sans', 'san-serif']
      }
    },
  },
  plugins: [],
}
