import React, { useContext } from 'react'
import {useNavigate} from "react-router-dom"
import "./CartItems.css";
import Button from '../../Button-type/Button';
import CartDropItems from '../CartDropdownItems/CartDropItems';
import {useDispatch} from "react-redux"
import { setIsCartOpen } from '../../store/Cart/Cart.Action';
const CartItems = () => {
  const Navigate = useNavigate() 
const dispatch = useDispatch()

const gotocheckoutPage = ()=>{
  Navigate("/checkout")
  dispatch(setIsCartOpen(false))
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
