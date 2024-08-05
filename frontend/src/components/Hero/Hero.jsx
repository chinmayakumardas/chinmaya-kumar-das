import React from 'react'
import {assets} from '../../assets/assets'
const Hero = () => {
  return (
    <div className='flex'>
        <div>
          <h1 className='text-[72px] '>FULLSTACK DEVELOPER</h1>
        </div>
        <div>
          <img src={assets.heroimg} alt="" />
        </div>
    </div>
  )
}

export default Hero