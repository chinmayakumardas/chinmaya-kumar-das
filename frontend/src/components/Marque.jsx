import React from 'react'
import {motion} from "framer-motion"
const Marque = () => {
  return (
    <div className='w-full py-20 rounded-t-3xl bg-[#004D43]'>
          <div className=" border-t-2 border-b-2 text-white  border-zinc-500 flex gap-10 overflow-hidden whitespace-nowrap">
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[17vw] leading-none font-FoundersGrotesk uppercase font-semibold '>chinmaya kumar das</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[17vw] leading-none font-FoundersGrotesk uppercase font-semibold '>chinmaya kumar das</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[17vw] leading-none font-FoundersGrotesk uppercase font-semibold '>chinmaya kumar das</motion.h1>
            </div>
    </div>
  )
}

export default Marque