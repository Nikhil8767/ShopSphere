import React, { useState } from "react";
import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext=createContext();

const ShopContextProvider=(props)=>{

    const currency="Rs";
    const delivery_fee=40;
    const [search,setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(false);


    const value={
        products,currency,delivery_fee,
        search,setSearch,showSearch,setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider