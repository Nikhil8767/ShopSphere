import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const {products}=useContext(ShopContext)
    // to fetch the 10 products from the products
    const[LatestProduct,setLatestProduct]=useState([]);

    useEffect(()=>{
        const filterClothing=products.filter(item=>item.category==="clothing").slice(0,10);
        setLatestProduct(filterClothing);
    },[])
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'Currently added'} text2={'COLLECTION  '}/>
            <p className='w-3/4 m-auto text-sm sm:text-base text-gray-600'>
            See our Latest Collection and buy the best fashion clothes for you . Buy the best fashion
            </p>
        </div>

        {/* rendering the products for whicwe made productItem  */}

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                LatestProduct.map((item,index)=>(
                    <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
                ))
            }

        </div>

    </div>

  )
}

export default LatestCollection