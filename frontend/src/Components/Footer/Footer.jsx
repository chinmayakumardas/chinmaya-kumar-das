import React from 'react';
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" text-white text-2xl py-3 h-15">
      <div className="container  mx-auto flex justify-around items-center flex-col sm:flex-row">
        <div>
          <ul className="flex list-none p-0 ">
            <li className="mr-6 -mt-1">
            <i className='font-sans text-white text-sm hover:text-[#fb8500]'>Follow me  : -</i>
              {/* <a href="#" className="text-white text-md hover:text-yellow-500">
              <i className='font-sans'>Follow me  : -</i>
              </a> */}
            </li>
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

        <div>
          <p className="text-sm hidden sm:block">&copy; <span className='text-[#ff9f1c]'><i>2024</i></span> chinmaya kumar das. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
