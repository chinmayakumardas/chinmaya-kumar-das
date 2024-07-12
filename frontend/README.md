# React + Vite

- npm install
- npm i react-router-dum
- npm i react-icons
Tailwind
- npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

@tailwind base;
@tailwind components;
@tailwind utilities;


- npm run dev
