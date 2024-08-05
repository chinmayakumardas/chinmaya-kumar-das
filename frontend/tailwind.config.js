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
        textcolor:'#F9F7F4',
        body: '#111111',
        color1:'#F9F7F4',
        color2:'#53C926',
        color3:'#FFFFFF',
        
      },
    },
  },
  plugins: [],
}
