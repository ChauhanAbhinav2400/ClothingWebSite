import React from 'react'

import "./Checkout.css"
import {useSelector,useDispatch} from "react-redux"
import {CartcartTotal, CartdataSelector} from "../../store/Cart/Cart.Selelctor"
import { RemoveItemtoCart, addItemtoCart, clearCartItem } from '../../store/Cart/Cart.Action'
const Checkout = () => {
const cartData = useSelector(CartdataSelector)
const cartTotal = useSelector(CartcartTotal)
    const dispatch = useDispatch()
  return (
    <div className='checkout-container'>

        <ul className='checkout-header'>
            <li>Product</li>
            <li>Name</li>
            <li>Quantity</li>
            <li>Price</li>
            <li>Remove</li>
        </ul>
   {
    cartData.map((cartitem)=>{
const {name,price,quantity,id,imageurl} = cartitem
        return(
             <div className='checkout-product-container'  key = {id}>
                <div className='checkout-image-container'>
                  <img src={imageurl} alt={`${name}`}  width = "100px" height= "100px"/>
                </div>
                <div className='checkout-name-container'>
                  <h4>{name}</h4>
                </div>
                <div className='checkout-quantity-container'>
         <span onClick = {()=>dispatch(RemoveItemtoCart(cartData,cartitem))} className='checkout-valuehandle'>&#10094;</span>
                <h2 className='checkout-quantity'>{quantity}</h2>
         <span onClick={()=>dispatch(addItemtoCart(cartData,cartitem))} className='checkout-valuehandle'>&#10095;</span>
                </div>
                <div className='checkout-price-container'>
                  <h3>{price}</h3>
                </div>
                <div className='checkout-remove-container'>
                 <button className='checkout-remove-container' onClick={()=>dispatch(clearCartItem(cartData,cartitem))} >x</button>
                </div>
           
         
            </div>
           
            
        )
    })
   }
<div className='checkout-total' >Total:${cartTotal}</div>
    </div>
  )
}

export default Checkout
