import React from 'react'
import "./CartIcon.css";
import { useSelector,useDispatch } from 'react-redux';
import { setIsCartOpen } from '../../store/Cart/Cart.Action';
import { Cartcartcount, CartisCartOpen } from '../../store/Cart/Cart.Selelctor';




const CartIcon = () => {

const cartcount = useSelector(Cartcartcount)
const isCartOpen = useSelector(CartisCartOpen)
const dispatch = useDispatch()

const  togglehide = ()=>dispatch(setIsCartOpen(!isCartOpen))

  return (
    <div onClick={()=>togglehide()}>
      <img src="https://www.clipartmax.com/png/small/336-3360029_shopping-bag-vector-svg-png-icon-free-download-cart-bag-icon-png.png" alt="carticon" width = "35px" />
     <span className='number-of-items'>{cartcount}</span>
    </div>
  )
}

export default CartIcon
