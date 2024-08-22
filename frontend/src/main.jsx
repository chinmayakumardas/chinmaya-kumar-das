
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContextProvider } from './contexts/Appcontext.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <AppContextProvider>
            <BrowserRouter>
                    <App />
            </BrowserRouter>
    </AppContextProvider>
  
)
