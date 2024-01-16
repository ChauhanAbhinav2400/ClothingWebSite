import React, { useContext } from 'react'
import {CartContext} from "../../userContext/CartContext";
import "./CartDropItems.css"
import { Link } from 'react-router-dom';

const CartDropItems = () => {
const {cartData,setIsCartOpen} = useContext(CartContext)
console.log(Boolean(cartData))
  return (
    <div>
      {cartData.length > 0 ?
        cartData.map(item =>{
            const {name,quantity,id,imageurl,price} = item
          return(
            <div className='cartdropitems-container'>
                <img src={imageurl} alt = {`${name}`} height = "60px" />
           <div className='addtotal'><h5>{name}</h5><span>{quantity}x{price}</span></div> 
            <div>total :<span>{eval(quantity*price)}</span></div>

            </div>
          )                                  
        })
     :( <><h4>Your cart is Empty </h4> <Link to = "/shop" onClick = {()=>setIsCartOpen(false)}> Add Items</Link> </>) } 
    </div>
  )
}

export default CartDropItems
