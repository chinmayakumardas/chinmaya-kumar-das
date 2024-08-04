import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext.jsx';
import { AppContext } from '../../frontend/src/context/AppContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
     <ThemeContext>
          <AppContext>
                <App />
          </AppContext>
     </ThemeContext>
  </BrowserRouter>
)
