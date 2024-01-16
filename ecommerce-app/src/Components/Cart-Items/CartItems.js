import React, { useContext } from 'react'
import {useNavigate} from "react-router-dom"
import "./CartItems.css";
import Button from '../../Button-type/Button';
import CartDropItems from '../CartDropdownItems/CartDropItems';
import {CartContext} from "../../userContext/CartContext"

const CartItems = () => {
  const Navigate = useNavigate()
const {setIsCartOpen} = useContext(CartContext)
const gotocheckoutPage = ()=>{
  Navigate("/checkout")
  setIsCartOpen(false)
}

  return (
    <div className='cartitems-container'>
        <div  className='sub-cartitems-container'>
<CartDropItems />
        </div>
      <Button className="shop" Name = "Go To Checkout" onClick={()=>gotocheckoutPage()} />
    </div>
  )
}

export default CartItems
