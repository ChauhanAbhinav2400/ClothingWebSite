import React, { useContext } from 'react'
import Button from '../../Button-type/Button';
import "./ProductCard.css";
import {useSelector, useDispatch } from 'react-redux';
import {CartdataSelector} from '../../store/Cart/Cart.Selelctor'
import { addItemtoCart } from '../../store/Cart/Cart.Action';

const ProductCard = ({product}) => {

const cartData = useSelector(CartdataSelector)
const dispatch = useDispatch()
    const {name,price,imageurl} = product
  return (
    <div className='Product-container'>
      <img src = {imageurl} alt = {`${name}`} width = "300px" height = "250px" />
      <div className='product-info'>
        <span>{name}</span>
        <span>{price}</span>
      </div>
<div className='product-btn'><Button className="inverted" Name = "Add to Cart" onClick = {()=>dispatch(addItemtoCart(cartData,product))} /></div>
    </div>
  )
}

export default ProductCard
