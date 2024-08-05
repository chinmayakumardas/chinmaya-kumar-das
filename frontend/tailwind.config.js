/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"gilroy"', 'sans-serif'],
      },
      colors: {
        textcolor:'#FFFFFF',
        body: '#111111',
        primary: '#ffc133',
        secondary: '#33c4ff',
      },
    },
  },
  plugins: [],
}
