import React from 'react'
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  return (
    <div className='flex  gap-20 text-white text-2xl w-11/12'>
      <div className='w-[45%] h-full mr-[10px] '>
          <p className='opacity-50 mb-5'>GET IN TOUCH</p>
          <h1 className='text-5xl'>Let's  make your <br></br> brand brilliant!</h1>
          <p className=' opacity-60 mt-5 mb-5'>If you would like to work with us or just want to get in touch, we’d love to  hear from you!</p>
          <a href='tel:+916370073215' className='text-[#7FE8B8] text-3xl'><u>+91 - 6370073215</u></a>
          <div>
          <ul className="flex list-none pt-[25px] text-4xl">
            <li className="mr-6">
              <a href="#" className="text-white hover:text-[#000000]">
              <FaXTwitter />
              </a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white hover:text-[#25d366]">
              <FaWhatsapp />
              </a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white hover:text-[#1877f2]">
              <TfiFacebook />
              </a>
            </li>
            <li className="mr-6">
              <a href="#" className="text-white hover:text-[#c32aa3]">
              <FaInstagram />
              </a>
            </li>
            {/* Add more social media icons as needed */}
          </ul>
        </div>
      </div>
      <form className='flex flex-col gap-8  h-full    w-[45%]'>
        <div className='flex justify-between gap-1  w-full bg-[#1D1D1D] '>
          <input className='bg-[#1D1D1D]  text-white border-[1px] opacity-70 rounded-md px-2  py-1' placeholder='Name' type='text'></input>  
          <input className='bg-[#1D1D1D] text-white border-[1px] opacity-70 rounded-md  px-2 py-1' placeholder='Email' type='email'></input>
        </div>
          <input type='text' className='bg-[#1D1D1D] text-white border-[1px] rounded-md  opacity-70 px-2 py-1' placeholder='Subject'></input>
          <textarea className='bg-[#1D1D1D] text-white border-[1px] rounded-md  opacity-70 px-2 py-2 min-h-[100px]' placeholder='Enter Message' type='textarea'></textarea>
        <button className='border-[1px] rounded-md py-1.5 bg-gradient-to-r from-black to-white text-white py-2 px-4 transition duration-400 ease-in hover:from-white hover:to-black'>SEND A MESSAGE</button>
       

      </form>
    </div>
  )
}

export default Contact