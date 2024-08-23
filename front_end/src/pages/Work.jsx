import React, { useContext } from 'react'
import { AppContext } from './../contexts/Appcontext';
import Grid from './../components/Grid';
// import gsap from "gsap";
// import { useGSAP } from '@gsap/react';

const Work = () => {
  const {works}=useContext(AppContext)
  
  return (
    <div className='w-full px-[4vw]'>
      <p className='font-light text-[17px] sm:text-[20px]'>Bringing ideas to life and setting you up for the future</p>
      <h1 className='recent-work uppercase border-b-4 w-[60vw] my-5 sm:my-10 border-black font-FoundersGrotesk leading-none text-[5vh] sm:text-[10vh] md:text-[15vh] lg:text-[20vh] xl:text-[25vh] '>Recent Works</h1>
      <div className='flex flex-col md:flex-row flex-wrap gap-8 justify-between'>
        {
          works.map((item,index)=>{
            return (
              <Grid key={index} project={item}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Work