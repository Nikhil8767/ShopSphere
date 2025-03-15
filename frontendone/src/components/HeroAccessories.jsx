import React from 'react'
import { assets } from '../assets/assets'
import LatestAccessories from './LatestAccessories'
import BestSelAcc from './BestSelAcc'
import OurPolicy from './OurPolicy'

const HeroAccessories = () => {
  return (
    <>
        <div className='px-4 sm:px-10 '>
            <div className='flex flex-col sm:flex-row border border-gray-400 '>
                {/* this will be our hero left side  */}
                <div className='w-full sm:w-1/2 flex items-center justify-center text-center py-10 sm:py-0'>
                    <div className='text-[#414141]'>
        
                        <div className='flex items-center gap-2'>
                            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                            <p className='font-medium text-sm md:text-base'>look good by choice</p>
                        </div>
        
                        <h1 className='text-3xl prata-regular  sm:py-3 lg:text-5xl leading-relaxed'>Accessories are like vitamins to fashion</h1>
        
                        <div className='flex items-center gap-2'>
                            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                        </div>  
        
                    </div>
                </div>
        
                {/* hero right side  the image wil be ther */}
        
                <img src={assets.hero1_acc} className='w-full sm:w-1/2 max-h-[500px]' alt="" />
            </div>
            </div>
            <LatestAccessories/>
            <BestSelAcc/>
            <OurPolicy/>
    </>
  )
}

export default HeroAccessories