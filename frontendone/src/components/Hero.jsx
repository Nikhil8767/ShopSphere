// import React from 'react'

// const Hero = () => {
//   return (
//     <>
        import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'  // Assuming assets are imported from a local file
import LatestCollection from './LatestCollection'
import BestSellFashion from './BestSellFashion'
import OurPolicy from './OurPolicy'
import NewsLetterBox from './NewsLetterBox'
import { Link } from 'react-router-dom'

// Assuming you have these images in your assets
// If not, replace with appropriate paths
const categoryImages = {
  clothing: assets.hero_img || "/placeholder.svg?height=500&width=500",
  footwear: assets.footwear_img || "/placeholder.svg?height=500&width=500",
  accessories: assets.accessories_img || "/placeholder.svg?height=500&width=500"
}

const Hero = () => {
  const [currentCategory, setCurrentCategory] = useState('clothing')
  
  // Auto rotate categories every 5 seconds
  useEffect(() => {
    const categories = ['clothing', 'footwear', 'accessories']
    const interval = setInterval(() => {
      setCurrentCategory(prev => {
        const currentIndex = categories.indexOf(prev)
        const nextIndex = (currentIndex + 1) % categories.length
        return categories[nextIndex]
      })
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])
  
  // Category content mapping
  const categoryContent = {
    clothing: {
      tagline: "have dressing sense",
      title: "\"Buy more show your Fashion Sense\"",
      image: categoryImages.clothing
    },
    footwear: {
      tagline: "have walking sense",
      title: "\"Step into Style with Our Footwear Collection\"",
      image: assets.footwear1hero
    },
    accessories: {
      tagline: "have styling sense",
      title: "\"Complete Your Look with Perfect Accessories\"",
      image: assets.hero1_acc
    }
  }

  return (
    <>
      {/* Hero Section */}
      <div className='px-4 sm:px-10'>
        <div className='flex flex-col sm:flex-row border border-gray-400'>
          {/* Hero left side */}
          <div className='w-full sm:w-1/2 flex items-center justify-center text-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
              <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                <p className='font-medium text-sm md:text-base'>{categoryContent[currentCategory].tagline}</p>
              </div>

              <h1 className='text-3xl prata-regular sm:py-3 lg:text-5xl leading-relaxed'>
                {categoryContent[currentCategory].title}
              </h1>

              <div className='flex items-center gap-2 justify-center mt-4'>
                <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
              </div>
              
              {/* Category selector */}
              <div className='flex justify-center gap-4 mt-6'>
                {['clothing', 'footwear', 'accessories'].map(category => (
                  <button
                    key={category}
                    onClick={() => setCurrentCategory(category)}
                    className={`px-4 py-2 text-sm capitalize ${currentCategory === category ? 'border-b-2 border-[#414141] font-semibold' : 'text-gray-500'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Hero right side - image */}
          <div className='w-full sm:w-1/2 h-[400px] sm:h-[500px] relative overflow-hidden'>
            {['clothing', 'footwear', 'accessories'].map(category => (
              <img 
                key={category}
                src={categoryContent[category].image || "/placeholder.svg"} 
                className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${currentCategory === category ? 'opacity-100' : 'opacity-0'}`}
                alt={`${category} collection`} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Category Sections */}
      <div className='px-4 sm:px-10 py-16'>
        <h2 className='text-3xl prata-regular text-center mb-12'>
          Our Categories
          <div className='w-20 h-[2px] bg-[#414141] mx-auto mt-4'></div>
        </h2>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Clothing Category */}
          <div className='group cursor-pointer border border-gray-200 overflow-hidden'>
            <div className='relative h-[300px] overflow-hidden'>
              <img 
                src={assets.hero_img || "/placeholder.svg"} 
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                alt="Clothing collection" 
              />
              <div className='absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                <Link to="/fashion" className='bg-white text-[#414141] px-6 py-2 font-medium'>
                  View Collection
                </Link>
              </div>
            </div>
            <div className='p-4 text-center'>
              <h3 className='text-xl font-medium text-[#414141]'>Clothing</h3>
              <p className='text-gray-600 mt-2'>Explore our latest fashion collection</p>
            </div>
          </div>
          
          {/* Footwear Category */}
          <div className='group cursor-pointer border border-gray-200 overflow-hidden'>
            <div className='relative h-[300px] overflow-hidden'>
              <img 
                src={assets.footwear1hero || "/placeholder.svg"} 
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                alt="Footwear collection" 
              />
              <div className='absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                <Link to="/footwear" className='bg-white text-[#414141] px-6 py-2 font-medium'>
                  View Collection
                </Link>
              </div>
            </div>
            <div className='p-4 text-center'>
              <h3 className='text-xl font-medium text-[#414141]'>Footwear</h3>
              <p className='text-gray-600 mt-2'>Step into style with our footwear</p>
            </div>
          </div>
          
          {/* Accessories Category */}
          <div className='group cursor-pointer border border-gray-200 overflow-hidden'>
            <div className='relative h-[300px] overflow-hidden'>
              <img 
                src={assets.hero1_acc  || "/placeholder.svg"} 
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                alt="Accessories collection" 
              />
              <div className='absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                <Link to="/accessories" className='bg-white text-[#414141] px-6 py-2 font-medium'>
                  View Collection
                </Link>
              </div>
            </div>
            <div className='p-4 text-center'>
              <h3 className='text-xl font-medium text-[#414141]'>Accessories</h3>
              <p className='text-gray-600 mt-2'>Complete your look with our accessories</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// export default MainPage

//     </>
//   )
// }

export default Hero