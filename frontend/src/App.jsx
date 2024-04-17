import "./App.css";
import { useState, useEffect } from "react";
import BounceLoader  from "react-spinners/BounceLoader";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="App bg-[#1D1D1D] h-screen flex justify-center items-center">
      {loading ? (
        <div className="flex justify-center items-center">
          <BounceLoader  color="#fb8500" />
        </div>
      ) : (
        <div className="bg-[#1D1D1D] font-montserrat h-screen min-w-[100%] px-[2%] pt-[1%] flex flex-col">
          <Header />
          <Navbar />
          <div className="bg-white h-0.5 opacity-30 w-full"></div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
