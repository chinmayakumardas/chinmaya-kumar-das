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
        body:'#F9F7F4',
        primary:'',
        secondary:'#0F0F0F',
        text:'',
        text2:'',
       
        
      },
    },
  },
  plugins: [],
}
