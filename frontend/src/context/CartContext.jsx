import { createContext, useContext, useState, useEffect } from 'react'

//Create Context
const cartContext = createContext();

export const useCart = () => {
    return useContext(cartContext);
}
