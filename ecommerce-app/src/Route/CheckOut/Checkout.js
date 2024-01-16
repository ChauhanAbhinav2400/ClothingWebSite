import React, { useContext } from 'react'
import {CartContext} from "../../userContext/CartContext"
import "./Checkout.css"


const Checkout = () => {

    const {cartData,addItemtoCart,RemoveItemtoCart,clearCartItem,cartTotal} = useContext(CartContext)
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
         <span onClick = {()=>RemoveItemtoCart(cartitem)} className='checkout-valuehandle'>&#10094;</span>
                <h2 className='checkout-quantity'>{quantity}</h2>
         <span onClick={()=>addItemtoCart(cartitem)} className='checkout-valuehandle'>&#10095;</span>
                </div>
                <div className='checkout-price-container'>
                  <h3>{price}</h3>
                </div>
                <div className='checkout-remove-container'>
                 <button className='checkout-remove-container' onClick={()=>clearCartItem(cartitem)} >x</button>
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
