import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { AppContextProvider } from "./context/AppContext";
import { ThemeContextProvider } from './context/ThemeContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <AppContextProvider>
         <ThemeContextProvider>
             <App />
         </ThemeContextProvider>
      </AppContextProvider>
  </BrowserRouter>,
)
