import React, { useContext } from 'react'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import { ThemeContext } from './context/ThemeContext';

const App = () => {
  const {bgPri}=useContext(ThemeContext)
  return (
    <div className='bg-primary'>
      {/* this component used for layout */}
      <Header/>
      <Footer/>
    </div>
  )
}

export default App