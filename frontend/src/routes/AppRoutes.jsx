import React from 'react';
import { Routes, Route, NavLink,Link } from 'react-router-dom';
import HomePage from './../pages/HomePage';
import WorkPage from './../pages/WorkPage';
import AboutPage from './../pages/AboutPage';
import ContactPage from '../pages/ContactPage.jsx';

const AppRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <nav className="flex justify-between items-center h-[10vh]   px-20 ">
        <Link to='/'>
          @Chinmaya Kumar
        </Link>
        <div className="flex gap-10 ">
          <NavLink  to="/">Home</NavLink>
          <NavLink  to="https://oneminutestech.com/" target="_blank" rel="">Blog</NavLink>
          <NavLink  to="/work">Work</NavLink>
          <NavLink  to="/about">About</NavLink>
          <NavLink  to="/contact">Contact</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;