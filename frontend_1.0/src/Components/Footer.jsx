import React from 'react';
const Footer = () => {
  return (
    <footer className=" text-white text-2xl py-3 h-15">
      <div className="container  mx-auto flex justify-around items-center flex-col sm:flex-row">
        

        <div>
          <p className="text-sm hidden sm:block">&copy; <span className='text-[#ff9f1c]'><i>2024</i></span> chinmaya kumar das. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
