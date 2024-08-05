import React, { useState, useContext } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'; // Import icons from React Icons library
import { ThemeContext } from '../../../contexts/ThemeContext';
import HomePage from '../../../pages/HomePage';
import WorkPage from '../../../pages/WorkPage';
import AboutPage from '../../../pages/AboutPage';

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='relative'>
      <div className="w-full text-[20px] flex items-center justify-between py-6 px-[10vw] ">
        <NavLink to='/' className="text-2xl">@CHINMAYA.</NavLink>
        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex space-x-4 gap-6">
            <NavLink to='https://oneminutestech.com/' target='_blank'>Blog</NavLink>
            <NavLink to='/work'>Work</NavLink>
            <NavLink to='/about'>About</NavLink>
          </div>
          <button onClick={toggleMode} className="text-xl">
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
          <button className="text-xl sm:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`absolute sm:hidden w-full p-6  bg-${theme === 'light' ? 'textcolor' : 'body'} bg-opacity-80 backdrop-blur-md`}>
          <div className="flex flex-col items-center">
            <NavLink to='https://oneminutestech.com/' target='_blank' className="block mb-4" onClick={toggleMenu}>Blog</NavLink>
            <NavLink to='/work' className="block mb-4" onClick={toggleMenu}>Work</NavLink>
            <NavLink to='/about' className="block" onClick={toggleMenu}>About</NavLink>
          </div>
        </div>
      )}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/work' element={<WorkPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default Navbar;
