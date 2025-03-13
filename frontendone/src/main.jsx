import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* ✅ Wrap App inside BrowserRouter */}
    <ShopContextProvider>
      <App />
      </ShopContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
