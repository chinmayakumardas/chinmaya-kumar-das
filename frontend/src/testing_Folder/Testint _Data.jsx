import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../Routes/Home/Home";
import Gallery from "../Routes/Gallery/Gallery";
import Project from "../Routes/Project/Project";
import Experience from "../Routes/Experience/Experience";
import About from "../Routes/About_us/About";
import Contact from "../Routes/Contact_us/Contact";
import Blog from "../Routes/Blog/Blog";
import Education from "../Routes/Education/Education";
import Achievements from "../Routes/Achievements/Achievements";

const App = () => {
  return (
    <div className="bg-[#14213d] h-[100%] min-h-screen  mx-auto relative flex flex-col gap-5">
      <nav className="flex fixed gap-5 w-full justify-around h-[50px]  font-mono py-auto py-2">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/project">Project</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/achievement" element={<Achievements />}></Route>
      </Routes>
    </div>
  );
};

export default App;
