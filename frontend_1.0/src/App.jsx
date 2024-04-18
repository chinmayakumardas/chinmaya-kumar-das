import { useState, useEffect } from "react";
import './App.css'
import Preloader from './Components/Preloader'
import Header from "./Components/Header";
import Footer from './Components/Footer'
import Navbar from "./Components/Navbar/Navbar";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className='App bg-[#1D1D1D] flex w-full h-full justify-center items-center overscroll-x-none'>
       {
        loading ? (
          <Preloader/>
      ) :( 
        <div className="bg-[#1D1D1D] px-2 py-2 flex flex-col w-full h-screen justify-center items-center">
              <Header />
              <Navbar />
              <div className="bg-white h-0.5 opacity-30 w-full"></div>
              <Footer />
        </div>)
       }
       
      
    </div>
  )
}

export default App
