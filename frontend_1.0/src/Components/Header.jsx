import React from 'react'
import { LiaLinkedinIn } from "react-icons/lia";
import { RxGithubLogo } from "react-icons/rx";
const Header = () => {
  return (
    <div className='flex md:flex-row sm:justify-around font-semibold text-2xl  md:text-4xl    w-full pb-[1%] items-center flex-col  justify-center'>
        <p className='text-white '>CHINMAYA <span className='font-light opacity-75'> KUMAR</span>  </p>
        <div className='flex flex-row gap-4'>
            <div className='  rounded-full text-white text-3xl hover:bg-[#2b3137]'>
                <a href='https://github.com/chinmaya-kumar-das'><RxGithubLogo /></a>
            </div>
            <div className='bg-white rounded-sm text-3xl hover:text-[#0a66c2]'>
                <a href='https://www.linkedin.com/in/chinmayakdas/'><LiaLinkedinIn /></a>
            </div>
            {/* <div className='bg-white rounded-full  '>
                <a href='' ><SiLeetcode /></a>
            </div> */}
        </div>
    </div>
  )
}

export default Header