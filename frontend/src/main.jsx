import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './contexts/ThemeContext.jsx';
import { AppContextProvider } from './contexts/AppContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
     <ThemeContextProvider>
          <AppContextProvider>
                <App />
          </AppContextProvider>
     </ThemeContextProvider>
  </BrowserRouter>
)
