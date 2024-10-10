
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './contexts/Appcontext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
            <App />
    </AppContextProvider>
  </BrowserRouter>
 
)
