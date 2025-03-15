import React from 'react'
import { assets } from '../assets/assets'
import LatestFootwareCollection from './LatestFootwareCollection'
import BestSelFootwear from './BestSelFootwear'

const HeroFootwear = () => {
  return (
    <>
    <div className='px-4 sm:px-10 '>
    <div className='flex flex-col sm:flex-row border border-gray-400 '>
        {/* this will be our hero left side  */}
        <div className='w-full sm:w-1/2 flex items-center justify-center text-center py-10 sm:py-0'>
            <div className='text-[#414141]'>

                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>pretty shoes pretty heart</p>
                </div>

                <h1 className='text-3xl prata-regular  sm:py-3 lg:text-5xl leading-relaxed'>"Good footwear takes you to good places"</h1>

                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>  

            </div>
        </div>

        {/* hero right side  the image wil be ther */}

        <img src={assets.footwear1hero} className='w-full sm:w-1/2 max-h-[500px]' alt="" />
    </div>
    </div>
    <LatestFootwareCollection/>
    <BestSelFootwear/>
    </>
  )
}

export default HeroFootwear