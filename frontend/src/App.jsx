import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Clothing from './pages/Clothing'
import Accessories from './pages/Accessories'
import Footware from './pages/Footware'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/fashion' element={<Clothing/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/footware' element={<Footware/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='product/:productId' element={<Product/>}/>
        <Route path='/car' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>

      </Routes>
    </div>
  )
}

export default App