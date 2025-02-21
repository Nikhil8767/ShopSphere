import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    
    function Hero() {
        const [currentSlide, setCurrentSlide] = useState(0)
      
        useEffect(() => {
          const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length)
          }, 5000) // Change slide every 5 seconds
      
          return () => clearInterval(timer)
        }, [])
      
        return (
          <section className="relative h-screen">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={assets.menu_icon || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30" />
                <div className="absolute inset-0 flex flex-col justify-center items-start p-6 sm:p-12 lg:p-24">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl">
                    {slide.description}
                  </p>
                  <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </section>
        )
      }


  )
}

export default Hero