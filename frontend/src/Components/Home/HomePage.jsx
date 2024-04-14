import React from 'react'
import SideNavbar from './SideNavbar'
import HeroSection from './HeroSection'

const HomePage = () => {
   
  return (
    <div className='h-[83vh] flex gap-2 '>
        <HeroSection></HeroSection>
        <img src='./myphoto.webp'></img>
        <SideNavbar></SideNavbar>
    </div>
  )
}

export default HomePage