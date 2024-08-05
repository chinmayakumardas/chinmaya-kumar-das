import React from 'react'
import {Routes,Route,NavLink} from 'react-router-dom'
import HomePage from './../../../pages/HomePage';
import AboutPage from './../../../pages/AboutPage';
import WorkPage from './../../../pages/WorkPage';
import { MdOutlineDarkMode } from "react-icons/md";
const Navbar = () => {
  return (
    <div className='bg-body text-textcolor'>
      <nav className='flex w-[100vw] px-[5vw] justify-between items-center h-[12vh] py-[2vw]'>
        <NavLink className='text-12vw md:text-[1.6vw]' to='/'>CHINMAYA.</NavLink>
        <div className='flex items-center gap-[2vw]'>
              <NavLink to='https://oneminutestech.com/' target='_blank'>BLOG</NavLink>
              <NavLink to='/work'>WORK</NavLink>
              <NavLink to='/about'>ABOUT</NavLink>
              <button><MdOutlineDarkMode /></button>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='work' element={<WorkPage/>}/>
        <Route path='about' element={<AboutPage/>}/>
        <Route path='/*' element={<p>Error</p>}/>
      </Routes>
    </div>
  )
}

export default Navbar