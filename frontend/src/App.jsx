import React,{useEffect,useRef} from 'react'
import Header from './components/Header'
import Footer from './components/Footer';
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import './styles/locomotive-scroll.css';
import LocomotiveScroll from 'locomotive-scroll';
const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp:0.05,
      // add any additional Locomotive Scroll options here
    });

    return () => {
      scroll.destroy();
    };
  }, []);
 
  return (
    <div ref={scrollRef} className='scroll-container  bg-primary min-h-[100vh] max-w-[100vw]  flex flex-col justify-evenly overflow-hidden'>
      <Header/>
      <main className="w-full min-h-[100vh] ">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/home" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      <Footer/>
    </div>
  )
}

export default App