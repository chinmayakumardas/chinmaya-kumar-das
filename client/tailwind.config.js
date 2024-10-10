/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: '#3490dc',
        col:"#212121",
        primary: '#F1F1F1',
        secondary: '#F9F7F4',
      },
      fontFamily: {
        FoundersGrotesk: ['FoundersGrotesk', 'sans-serif'],
        Gilroy: ['Gilroy', 'sans-serif'],
        NeueMontreal: ['NeueMontreal', 'sans-serif'],
        Futura: ['Futura', 'sans-serif'],
        HeleveticaNow: ['HeleveticaNow', 'sans-serif'],
      },
      backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      'scale': '125%',
    }
    },
  },
  plugins: [],
}