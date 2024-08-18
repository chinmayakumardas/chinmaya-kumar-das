/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#F1F1F1',
      },
      fontFamily: {
        FoundersGrotesk: ['FoundersGrotesk', 'sans-serif'],
        Gilroy: ['Gilroy', 'sans-serif'],
        NeueMontreal: ['NeueMontreal', 'sans-serif'],
        Futura: ['Futura', 'sans-serif'],
        HeleveticaNow: ['HeleveticaNow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}