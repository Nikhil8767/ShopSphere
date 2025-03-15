import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src="" alt="ShopSphere" className='mb-5 w-32' />
                <p className='w-full md:w-2/3 text-gray-600'> 
                    welcome to ShopSphere , we deliver best products at best quality to our customer . Once you come to our platform this will become your best choice to buy the things online
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home </li>
                    <li>About Us</li>
                    <li>Privacy policy</li>
                    <li>Delivery</li>

                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5  '>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 9322414260 </li>
                    <li>nikhilgupta932003@gmail.com</li>
                    

                </ul>
            </div>

        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ shopSphere.com - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer