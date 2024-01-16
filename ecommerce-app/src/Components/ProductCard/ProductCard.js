import React, { useContext } from 'react'
import Button from '../../Button-type/Button';
import "./ProductCard.css";
import {CartContext} from "../../userContext/CartContext"

const ProductCard = ({product}) => {
const {addItemtoCart} = useContext(CartContext)

    const {name,price,imageurl} = product
  return (
    <div className='Product-container'>
      <img src = {imageurl} alt = {`${name}`} width = "300px" height = "250px" />
      <div className='product-info'>
        <span>{name}</span>
        <span>{price}</span>
      </div>
<div className='product-btn'><Button className="inverted" Name = "Add to Cart" onClick = {()=>addItemtoCart(product)} /></div>
    </div>
  )
}

export default ProductCard
