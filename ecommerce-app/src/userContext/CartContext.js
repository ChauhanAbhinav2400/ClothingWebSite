import {createContext, useEffect, useReducer, useState} from "react";

const addCartData = (cartData,product)=>{
const existingitem = cartData.find((item) => 
    item.id === product.id
)
// console.log(Boolean(existingitem))
if(existingitem){
   return cartData.map((item)=>
       item.id === product.id ?
         {...item,quantity:item.quantity+1}:item
       
       
    )
}
return [...cartData,{...product,quantity:1}]
}

const RemoveCartData = (cartData,productToRemove)=>{
    const existingitem = cartData.find((item) => 
    item.id === productToRemove.id
)
if(existingitem.quantity === 1 ){
    return cartData.filter((item)=>item.id !== productToRemove.id)
}
return cartData.map((item)=>
item.id === productToRemove.id ?
  {...item,quantity:item.quantity-1}:item


)
}

const ClearCartData = (cartData,productToClear)=>{
const existingitem = cartData.find((item)=>
item.id === productToClear.id
)
if(existingitem){
    return cartData.filter(item =>item.id !== productToClear.id )
}
}

export const CartContext = createContext({
    isCartOpen : false,
    cartData : [],
    addItemtoCart:()=>{},
    RemoveItemtoCart:()=>{},
    clearCartItem:()=>{},
    cartTotal:0
})

const Initialstate = {
    cartData : [],
    cartTotal:0,
    cartcount:0,
    isCartOpen : false,
}

const Cartreducer = (state,action)=>{
const {type,payload} = action
    switch(type){
case  "SET_CART_VALUES":
    return {
        ...state,
        ...payload
    }
    case "CART_OPEN_CLOSE":
        return {
            ...state,
            isCartOpen:payload
        }
    default: return `unhandled type ${type} `
    }
}

export const CartProvider = ({children})=>{

    const [{cartData,cartTotal,cartcount,isCartOpen},dispatch] = useReducer(Cartreducer,Initialstate )

const updateCartDataReducer = (newCartData)=>{
    const newcartCount = newCartData.reduce((total,cartitem)=>
         total+cartitem.quantity
    ,0)

    const newcartTotal = newCartData.reduce((initial,cartItem) => initial+cartItem.quantity*cartItem.price,0)

    dispatch({type:"SET_CART_VALUES",payload:{
        cartData : newCartData,
        cartTotal:newcartTotal,
        cartcount:newcartCount
    }})
}


const addItemtoCart = (product)=>{
 const newCartData = addCartData(cartData,product)
 updateCartDataReducer(newCartData)
}

const RemoveItemtoCart = (productToRemove)=>{
   const newCartData =   RemoveCartData(cartData,productToRemove)
   updateCartDataReducer(newCartData)
}
 const clearCartItem = (productToClear)=>{
    const newCartData =  ClearCartData(cartData,productToClear)
    updateCartDataReducer(newCartData)
 }

 const setIsCartOpen = (bool)=>{
dispatch({type:"CART_OPEN_CLOSE",payload:bool})
 }

const value = {isCartOpen,
    setIsCartOpen,
    addItemtoCart,
    cartData,
    cartcount,
    RemoveItemtoCart,
    clearCartItem,
    cartTotal
}

    return(
        <CartContext.Provider value = {value}>{children}</CartContext.Provider>
    )
}






















