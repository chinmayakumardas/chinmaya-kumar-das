import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import Header from "./Components/Header/Header";
import HomePage from "./Components/Home/HomePage";
import Footer from "./Footer";
const App = () => {
  return (
    <div className="bg-[#303942] font-montserrat h-screen w-full px-[5%] pt-[1%]">
      <Header></Header>
      <HomePage></HomePage>
      <div className="bg-white h-0.5 w-full"></div>
      <Footer></Footer>
    </div>
    
  );
};

export default App;
