import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer';
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
const App = () => {
  return (
    <div  className='bg-secondary min-h-[100vh] max-w-[100vw]  flex flex-col justify-between overflow-hidden'>
      <Header/>
      <main className="w-full min-h-[100vh] border-2 border-blue-700 ">
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