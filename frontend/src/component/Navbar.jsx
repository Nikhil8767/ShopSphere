import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className=''>
        <img src="/" alt="logo" />
        <ul>
            <NavLink to='/about' className='flex items-center justify-between py-5 '>
            <p className='text-8xl'>about</p>
            <hr />

            </NavLink>
        </ul>
    </div>
  )
}

export default Navbar