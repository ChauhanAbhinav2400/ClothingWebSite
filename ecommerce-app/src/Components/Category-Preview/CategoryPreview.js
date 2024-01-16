import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import "../ProductCard/ProductCard.css";
import {Link} from "react-router-dom"
const CategoryPreview = ({title,products}) => {
  return (
    <>
    <h2>
   <Link to = {`${title}`} > <span>{title.toUpperCase()}</span></Link>
  </h2>
    <div className='Product-data-show'>
     
      {
        products.filter((_,index)=> index<3)
        .map((product)=>{
            return (
                <div >
                <ProductCard product = {product} />
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default CategoryPreview
