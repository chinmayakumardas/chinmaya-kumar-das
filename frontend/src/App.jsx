import "./App.css";


import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
const App = () => {
  return (
    <div className="bg-[#303942] font-montserrat h-screen min-w-[100%] px-[3%] pt-[1%] flex flex-col">
      <Header></Header>
      <Navbar></Navbar>
      <div className="bg-white h-0.5 w-full"></div>
      <Footer></Footer>
    </div>
    
  );
};

export default App;
