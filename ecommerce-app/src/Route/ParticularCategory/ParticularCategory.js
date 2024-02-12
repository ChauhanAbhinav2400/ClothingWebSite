import React, { useState,useEffect } from 'react'
import {useParams} from "react-router-dom"
import ProductCard from '../../Components/ProductCard/ProductCard';
import "../../Components/ProductCard/ProductCard.css"
import { useSelector } from 'react-redux';
import {categorySelector} from "../../store/Category/CategorySelector";
const ParticularCategory = () => {

const {category} = useParams()
console.log("render/re-render ")
const categoriesMap = useSelector(categorySelector)
const [products,setProducts] = useState(categoriesMap[category])

useEffect(()=>{
  console.log("effect fired ")
setProducts(categoriesMap[category])
},[categoriesMap,category])
  return (
    <>
    <h2    style = {{position:"relative", left:"600px"}} >{category.toUpperCase()}</h2>
    <div className='Product-data-show'   >
      {products &&
        products.map((product,index)=>{
            return(
                <div key = {index} >
                <ProductCard product = {product}  />
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default ParticularCategory
