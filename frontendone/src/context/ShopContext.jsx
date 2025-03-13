import React from "react";
import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext=createContext();

const ShopContextProvider=(props)=>{

    const currency="Rs";
    const delivery_fee=10;


    const value={
        products,currency,delivery_fee
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider