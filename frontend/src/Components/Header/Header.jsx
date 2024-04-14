import React from 'react'
import { LiaLinkedinIn } from "react-icons/lia";
import { RxGithubLogo } from "react-icons/rx";
const Header = () => {
  return (
    <div className='flex justify-around font-semibold text-4xl   h-10 w-full py-auto items-center'>
        <p className='text-white'>CHINMAYA <span className='font-light opacity-75'> KUMAR</span>  </p>
        <div className='flex flex-row gap-4'>
            <div className='  rounded-full text-white'>
                <a href='https://github.com/chinmaya-kumar-das'><RxGithubLogo /></a>
            </div>
            <div className='bg-white rounded-sm '>
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