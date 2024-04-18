import React, { useEffect } from 'react'

import { preLoaderAnim } from '../Animation'
const Preloader = () => {

  useEffect(()=>{
    preLoaderAnim()
  },[])
  return (
    <div className="preloader h-screen w-full bg-[#1D1D1D] text-white fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center ">
        <div className="text-container flex items-center justify-center h-full w-full font-bold text-lg overflow-hidden">
          <span>LOADING......</span>
          
        </div>
  </div>
  
  )
}

export default Preloader