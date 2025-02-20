import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Clothing from './pages/Clothing'
import Accessories from './pages/Accessories'
import Cart from './pages/Cart'
import Footware from './pages/Footware'
import Collection from './pages/Collection'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'


const App = () => {
  return (
    <div className='font-bold'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/clothing' element={<Clothing/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/footware' element={<Footware/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>

      </Routes>
    </div>
  )
}

export default App