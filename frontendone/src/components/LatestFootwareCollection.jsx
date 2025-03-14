import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestFootwareCollection = () => {
    const {products} =useContext(ShopContext)
    const [latestFottwear,setLatestFootwear]=useState([]);

    useEffect(()=>{
        const filterFootwear=products.filter(item=>item.category==="Footwear").slice(0,4);
        setLatestFootwear(filterFootwear);
    },[products]);
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'Latest'} text2={"footwears"}/>
            <p className='w-3/4 m-auto text-sm sm:text-base text-gray-600'>
            Explore our latest footwear Collections and find the perfect style for you.
            </p>
        </div>

        {/* now rendering the filter footwear from the product */}

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestFottwear.map((item,index)=>(
                <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
    </div>
    </div>
    
  )
}

export default LatestFootwareCollection