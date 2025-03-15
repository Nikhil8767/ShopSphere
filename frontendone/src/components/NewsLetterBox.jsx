import React from 'react'
import { Link } from 'react-router-dom'

const onSubmitHandler=(event)=>{
    event.preventDefault();
}

const NewsLetterBox = () => {
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 40% off</p>
        <p className='text-gray-400 mt-3'>
            Subscribe and get benifits of it  there are variour benifits of it ... <Link to='https://www.forbes.com/councils/forbesbusinessdevelopmentcouncil/2022/10/18/9-reasons-to-offer-your-customers-a-subscription-service/' target='_blank' className='font-bold text-gray-900'>Read more</Link>
        </p>

        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='enter your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>

    </div>
  )
}

export default NewsLetterBox