
import React, { useState } from 'react';

import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className='flex items-center justify-between py-6 px-15 font-medium'>
        <img src="/" alt="shopSphere" />
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700 hidden'>

            <NavLink to='/' className='flex flex-col items-center gap-1 '>
                <p>Home</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
            </NavLink>

             {/* Dropdown for Categories */}
        <div 
          className="relative flex flex-col items-center gap-1 cursor-pointer"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <p>CATEGORIES</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute top-7 left-0 w-40 bg-white shadow-lg rounded-md py-2">
              <NavLink to="/clothing" className="block px-4 py-2 hover:bg-gray-200 ">
                Fashion
              </NavLink>
              <NavLink to="/accessories" className="block px-4 py-2 hover:bg-gray-200 ">
                Accessories
              </NavLink>
              <NavLink to="/footwear" className="block px-4 py-2 hover:bg-gray-200 ">
                Footwear
              </NavLink>
            </div>
          )}
        </div>

            <NavLink to='/about' className='flex flex-col items-center gap-1 '>
                <p>ABOUT US</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='contact' className='flex flex-col items-center gap-1 '>
                <p>CONTACT US</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

        </ul>

        <div className='flex item-center gap-6'>
          <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            <div className='group relative'>
                <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>LogOut</p>
                    </div>
                </div>
            </div>
            <Link to="/cart" className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5 'alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
            </Link>
    </div>
    </div>
  )
}

export default Navbar