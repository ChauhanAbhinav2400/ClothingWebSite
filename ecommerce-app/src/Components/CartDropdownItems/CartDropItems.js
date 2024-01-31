import React  from 'react';
import "./CartDropItems.css"
import { Link } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { CartdataSelector } from '../../store/Cart/Cart.Selelctor';
import { setIsCartOpen } from '../../store/Cart/Cart.Action';

const CartDropItems = () => {
const cartData = useSelector(CartdataSelector)
console.log(cartData)
const dispatch = useDispatch()
console.log(Boolean(cartData))
console.log(cartData)
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
     :( <><h4>Your cart is Empty </h4> <Link to = "/shop" onClick = {()=>dispatch(setIsCartOpen(false))}> Add Items</Link> </>) } 
    </div>
  )
}

export default CartDropItems
