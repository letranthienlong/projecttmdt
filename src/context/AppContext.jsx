import { createContext, useState } from "react";
import { getDataProduct } from "api/dataDrawFilter";

export const AppContext = createContext({})

export const getDefaultCart = () => {
   let cart = {};
   for (let i = 1; getDataProduct().length + 1; i++) {
      cart[i] = 0;
   }
   return cart;
}

export function AppProvider({children}){
   const [theme, setTheme] = useState({theme:'dark', layout: 'harizontal'})
   const [cartItems, setCartItems] = useState(getDefaultCart)
   const updateCart = (product) => {
      setCartItems(pr => [...pr,{product,quatity: 1}] )
   }

   const addToCart = (itemId) => {
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
   }

   const removeFromCart = (itemId) => {
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
   }

   const contextValue = {cartItems, theme, addToCart, removeFromCart,updateCart,setTheme}
   console.log(cartItems);
   return(
      <AppContext.Provider value={contextValue} >
         {children}
      </AppContext.Provider> 
   )
}