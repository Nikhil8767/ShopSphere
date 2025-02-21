import React from 'react'
import { assets } from '../assets/assets'

const HeroFashion = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* this will be our hero left side  */}
        <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                <p className='font-medium text-sm md:text-base'>OUR BEST SELLER</p>

            </div>
            <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrival</h1>
                <div className='flex item-center gap-2'>
                    <p className='font-semibold'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
        </div>

        {/* hero right side  */}

        <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />
    </div>
  )
}

export default HeroFashion