
import React, { useState } from 'react';

import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets';

const Navbar = () => {
    const [visible,setVisible]=useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showCategory,setShowCategory]=useState(false)
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
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
    </div>

    {/* we created the lower div for sidebar for smaller screen which will show menu  */}

    <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full': 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
            <button onClick={()=>setShowCategory(!showCategory)} className='text-left ml-5 p-2'>Categories
            </button>
            {showCategory &&(
               <div className="">
               <NavLink onClick={()=>setVisible(false)} className="block px-4 py-2 hover:bg-gray-200" to="/clothing">
                   Fashion
               </NavLink>
               <NavLink onClick={()=>setVisible(false)} className="block px-4 py-2 hover:bg-gray-200" to="/accessories">
                   Accessories
               </NavLink>
               <NavLink onClick={()=>setVisible(false)} className="block px-4 py-2 hover:bg-gray-200" to="/footware">
                   Footwear
               </NavLink>
           </div>
       )}
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>About us</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact us</NavLink>
          </div>
    </div>
    </div>
  )
}

export default Navbar