import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'
import './index.css'
import { ScrollToTop } from './components/index.jsx'
import { FilterProvider } from './context/FilterContext.jsx'
import { CartProvider } from './context/CartContext.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <CartProvider>
      <FilterProvider>
        <ScrollToTop/>
        <ToastContainer/>
        <App />
      </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>,
)
