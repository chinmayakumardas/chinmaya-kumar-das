import React from 'react'
import AppRoutes from './../routes/AppRoutes';
import Footer from './../components/sections/Footer';

const Layout = () => {
  
  return (
    <div className='min-h-screen flex flex-col gap-3 bg-[#222222] text-[#F3EFEF]'>
      <AppRoutes/>
      <Footer />
    </div>
  )
}

export default Layout