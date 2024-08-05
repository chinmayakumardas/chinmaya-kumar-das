import './App.css';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`bg-${theme == 'light' ? 'textcolor' : 'body'} text-${theme == 'light' ? 'body' : 'textcolor'} transition duration-500`}>
      <Navbar />
      {/* Other components */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
