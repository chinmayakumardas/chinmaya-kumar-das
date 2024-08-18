import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className='w-full px-[3.5vw] h-[85vh]'>
      <div className="textstructure  mt-10 lg:mt-28">
        {
           ( ["Hello I'm","FullStack ","Developer"]).map((item,index)=>{
                return ( 
                    <div key={index} className=" ">
                       <div className='w-fit flex '>
                            {
                                index===1&&(<div className=' mr-[1vw] w-[9vw] h-[6vw] relative top-[0.8vw] rounded bg-green-500'></div>)
                            } 
                            <h1 className='text-[9vw] h-full flex items-center opacity-75 uppercase leading-[6.5vw] font-semibold font-FoundersGrotesk '>{item}</h1>
                       </div>
                    </div>)
            })
        } 
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-24 flex  justify-between items-center px-[5vw] py-5 '>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>
            <p className='text-md font-light tracking-tight leading-none' key={index}>{item}</p>
            )}
            <div className="start flex items-center gap-2">
                 <div className="px-4 py-2 border-[2px] font-light text-md uppercase border-zinc-500 rounded-full">Let's Explore</div>
                 <div className="w-10 h-10 flex items-center justify-center   border-[1px] font-light text-sm capitalize border-zinc-400 rounded-full"> <span className='rotate-[45deg]'><FaArrowUpLong /></span></div>
            </div>
        </div>
       
    </div>
  )
}

export default Hero