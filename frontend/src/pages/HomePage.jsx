import React from 'react'
import Hero from '../components/Hero/Hero';
import Work from '../components/Work/Work';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';


const HomePage = () => {
  
  return (
    <div className='min-h-[100vh]'>
      <Hero/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default HomePage