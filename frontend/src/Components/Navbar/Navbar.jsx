import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { IoIosCodeWorking } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";

import Home from "./Home/Home";
import Contact from './Contact/Contact';
import About from './About/About'
import Project from './Project/Project';
import Experience from './Experience/Experience'
const Navbar = () => {
  return (
    <div className="h-screen ring-2 ring-purple-500  py-10 flex  items-center ">
      <nav className="bg-[#545f67]  w-[50px] h-[50vh] flex md:flex-col justify-center   rounded-full items-center mr-10">
      <ul className="flex flex-col gap-8 text-3xl">
        <li className="text-white">
          <NavLink to='/home'><FaHome /></NavLink>
        </li>
        <li className="text-white">
          <NavLink to='/about'><MdManageAccounts /></NavLink>
        </li>
        <li className="text-white">
          <NavLink to='/project'><GrProjects /></NavLink>
        </li>
        <li className="text-white">
          <NavLink to='/experience'><IoIosCodeWorking /></NavLink>
        </li>
        <li className="text-white">
          <NavLink to='/contact'><MdEmail /></NavLink>
        </li>
       
      </ul>
      </nav>
      <Routes>
          <Route path='/home' element={<Home></Home>}>
          </Route>
          <Route path='/about' element={<About></About>}>
          </Route>
          <Route path='/project' element={<Project></Project>}>
          </Route>
          <Route path='/contact' element={<Contact></Contact>}>
          </Route>
          <Route path='/experience' element={<Experience></Experience>}>
          </Route>
          <Route path='/contact' element={<Contact></Contact>}>
          </Route>
         
    </Routes>
    </div>
  );
};

export default Navbar;
