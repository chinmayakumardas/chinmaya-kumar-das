Tailwind
Installation: 
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

<p>
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      
    },
  },
  plugins: [],
}


In index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

Run:
npm run dev</p>
