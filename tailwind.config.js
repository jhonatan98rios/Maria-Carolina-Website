/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'contact-image': "url('/contact/bg.png')",
      }
    },
    fontFamily: {
      'display': ['Julius Sans One', 'sans-serif'],
    }
  },
  plugins: [],
  important: true
}
