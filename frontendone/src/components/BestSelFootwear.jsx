import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSelFootwear = () => {
    const {products}=useContext(ShopContext);
    const[bestFootSeller,setBestFootSeller]=useState([]);

    useEffect(()=>{
        const bestFootPro=products.filter((item)=>item.category==='Footwear' && (item.bestseller));
        setBestFootSeller(bestFootPro.slice(0,5));
    },[])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={"BEST"} text2={'SELLER'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                The product which is liked by all the users and which is our best sellers
            </p>
        </div>

        <div className='grid gird-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestFootSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/> 
                ))
            }
        </div>

    </div>
  )
}

export default BestSelFootwear