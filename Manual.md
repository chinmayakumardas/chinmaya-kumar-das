[**<h1>React App-Installation</h1>**](https://github.com/chinmayakumardas/Reactjs/)
<p>Create your project by this command </p><br>
<pre><code>npx create-react-app “project-name”</code></pre>
or<br>  
<pre><code>npm create vite@latest</code></pre>

Run:<br>
<pre><code>npm run Start</code></pre>
Run for Vite Package<pre><code>npm run dev</code></pre>

Build:<br>
<pre><code>npm run build</code></pre>

[**<h1>Tailwind</h1>**](https://github.com/chinmayakumardas/Reactjs/)
<p>First install this:</p>
<pre><code>npm install -D tailwindcss postcss autoprefixer</code>></pre>

<p>Run the command </p>
<pre><code>npx tailwindcss init -p</code></pre>
or Can Combine it 

<pre><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
</code></pre>
<p>Then add this in <code>tailwind.config.js</code>:</p>
<pre><code>/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>

<p>Add this code in <code>index.css</code>:</p>
<pre><code>@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>

[**<h1>GSAP Animation</h1>**](https://github.com/chinmayakumardas/Reactjs/)

<pre>
 <code>
  npm install @gsap/react
 </code>
 
  import the 2 lines of useGsap in  the component  

  import { useGSAP } from '@gsap/react';
  import gsap from 'gsap';

  for example 
  import React from 'react'
  import { useGSAP } from '@gsap/react';

  const App = () => {
  
        //use here like this  
        useGsap(()=>{
            //all gsap animation done here for example
            gsap.to('.box',
             { x: 360 });
        })
      return (
        <div className="box">
        App Components
        </div>
      )

  }
export default App  
</pre>

[**<h1>Locomotive js smooth scroll</h1>**](https://github.com/chinmayakumardas/Reactjs/)

<pre>
 <code>
Added soon 
   


 </code>
</pre>
[**<h1>Framer motion</h1>**](https://github.com/chinmayakumardas/Reactjs/)

<pre>
 <code>
  


 </code>
  <code>
  
 </code>
</pre>