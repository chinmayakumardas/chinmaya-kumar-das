import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import Header from "./Components/Header/Header";
const App = () => {
  return (
    <div className="bg-[#303942] font-montserrat h-screen w-full px-[5%] py-[1%]">
      <Header></Header>
     
    </div>
    
  );
};

export default App;
