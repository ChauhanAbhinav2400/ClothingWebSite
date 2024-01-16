import React, { useContext } from 'react'
import "./CartIcon.css";
import {CartContext} from "../../userContext/CartContext"



const CartIcon = () => {
const {isCartOpen,setIsCartOpen,cartcount} = useContext(CartContext)

const  togglehide = ()=>setIsCartOpen(!isCartOpen)

  return (
    <div onClick={()=>togglehide()}>
      <img src="https://www.clipartmax.com/png/small/336-3360029_shopping-bag-vector-svg-png-icon-free-download-cart-bag-icon-png.png" alt="carticon" width = "35px" />
     <span className='number-of-items'>{cartcount}</span>
    </div>
  )
}

export default CartIcon
