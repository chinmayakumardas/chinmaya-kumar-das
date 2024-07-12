// import React from 'react';
// import { Routes, Route, NavLink,Link } from 'react-router-dom';
// import HomePage from './../pages/HomePage';
// import WorkPage from './../pages/WorkPage';
// import AboutPage from './../pages/AboutPage';
// import ContactPage from '../pages/ContactPage.jsx';

// const AppRoutes = () => {
//   return (
//     <div className="flex flex-col min-h-screen ">
//       <nav className="flex justify-between items-center h-[10vh]   px-20 ">
//         <Link to='/'>
//           @Chinmaya Kumar
//         </Link>
//         <div className="flex gap-10 ">
//           <NavLink  to="/">Home</NavLink>
//           <NavLink  to="https://oneminutestech.com/" target="_blank" rel="">Blog</NavLink>
//           <NavLink  to="/work">Work</NavLink>
//           <NavLink  to="/about">About</NavLink>
//           <NavLink  to="/contact">Contact</NavLink>
//         </div>
//       </nav>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/work" element={<WorkPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//       </Routes>
//     </div>
//   );
// };

// export default AppRoutes;


import React, { useState } from 'react';
import { Routes,Route,NavLink, Link } from 'react-router-dom';
import HomePage from './../pages/HomePage';
import WorkPage from './../pages/WorkPage';
import AboutPage from './../pages/AboutPage';
import ContactPage from '../pages/ContactPage.jsx';

const AppRoutes = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center h-16 bg-[#222222] text-white px-6">
        {/* Logo (always visible) */}
        <Link to='/' className="text-lg font-bold">
          @ChinmayaKumar
        </Link>

        {/* Hamburger Menu Button (visible on mobile) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links (visible on larger screens) */}
        <div className="hidden lg:flex lg:gap-5">
          <NavLink to="/" exact className="text-white">Home</NavLink>
          <NavLink to="https://oneminutestech.com/" target="_blank" rel="noopener noreferrer" className="text-white">Blog</NavLink>
          <NavLink to="/work" className="text-white">Work</NavLink>
          <NavLink to="/about" className="text-white">About</NavLink>
          <NavLink to="/contact" className="text-white">Contact</NavLink>
        </div>
      </nav>

      {/* Dropdown Menu (visible on mobile when menuOpen is true) */}
      <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="bg-[#222222] text-white py-2 h-[100vh] ">
          <NavLink to="/" exact className="block px-4 py-2" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="https://oneminutestech.com/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>Blog</NavLink>
          <NavLink to="/work" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>Work</NavLink>
          <NavLink to="/about" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </div>
      </div>

      {/* Routing setup */}
      <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/work" element={<WorkPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//       </Routes>
    </div>
  );
};

export default AppRoutes;
