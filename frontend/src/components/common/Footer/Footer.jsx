import React, { useContext } from 'react'
import { MdArrowOutward, MdLocalPhone, MdOutlineAttachEmail } from "react-icons/md";
import { Appcontext } from './../../../contexts/AppContext';

const Footer = () => {
  const { social } = useContext(Appcontext);
  return (
    <div className='flex flex-col justify-center py-5 gap-28 px-[5vw] min-h-[75vh]   w-[100vw] text-textcolor bg-body '>
           {/* upper */}
            <div className='flex flex-col sm:flex-row md:flex-wrap gap-5 sm:justify-between md:justify-around'>
                  <div className='flex flex-col gap-2  w-[100%]  sm:w-[22%]'>
                        <h3 className='text-2xl text-color2'>FOLLOW US</h3>
                        <div className='flex flex-col justify-around gap-5'>
                          {social.map((item, index) => (
                            <div key={index}  className={`cursor-pointer flex flex-row justify-center gap-2 items-center border-[1px] rounded-[2vw] w-[120px] `}>
                              <a href={item.url} target='_blank'>{item.name}</a>
                              <MdArrowOutward />
                            </div>
                          ))}
                        </div>
                  </div>
                  <div className='flex flex-col gap-2  w-[100%] sm:w-[20%]'>
                    <h3 className='text-2xl text-color2'>NAVIGATION</h3>
                    <div className='flex flex-col justify-around gap-5'>
                      <a href="/home">Home</a>
                      <a href="/work">Work</a>
                      <a href="/about">About Us</a>
                      <a href="/contact">Contact</a>
                    </div>
                  </div>
                  <div className='flex flex-col gap-10  sm:gap-5 items-end  w-[100%]  sm:w-[50%]  '>
                    <h3 className='text-2xl text-color2'>LET'S CONNECT</h3>
                    <div className='border-[1px] px-5 py-3 rounded-[2vw] flex gap-1 items-center text-right'>
                      <MdLocalPhone />
                      <a href='tel:6370073215' className=''>+91-6370073215</a>
                    </div>
                    <div  className='border-[1px] px-5 py-3 rounded-[2vw] flex gap-1 items-center text-right'>
                      <MdOutlineAttachEmail />
                      <a href='mailto:chinmayakumardas2000@gmail.com'>chinmayakumardas2000@gmail.com</a>
                    </div>
                  </div>
            </div>
           {/* lower */}
           <div className='flex flex-col pt-5 sm:pt-10 sm:flex-row  justify-between md:gap-10 items-center border-t-[1px] border-t-opacity-50 '>
                <h4>CopyRight.-Chinmaya</h4>
                <h4>All Rights Reserved</h4>
                <h4>@2024</h4>
            </div>
    </div>
  )
}

export default Footer;