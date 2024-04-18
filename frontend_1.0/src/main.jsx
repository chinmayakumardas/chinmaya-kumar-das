import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
{/* <div className="h-[100vh] w-[100%] bg-[#000] text-[#fff] fixed bottom-0 left-0 right-0 z-55 flex justify-center items-center overflow-hidden">
      <div className="flex items-center justify-between h-[60px] w-[200px] font-medium overflow-hidden text-[#fff]">
        <span>Developer</span>
        <span>Curato </span>
        <span>Vibes.</span>
      </div>
    </div> */}