import React, { useContext, useState,useEffect } from 'react'
import {useParams} from "react-router-dom"
import {CategoriesContext} from "../../userContext/ProductContent"
import ProductCard from '../../Components/ProductCard/ProductCard';
import "../../Components/ProductCard/ProductCard.css"

const ParticularCategory = () => {

const {category} = useParams()
const {categoriesMap} = useContext(CategoriesContext)
const [products,setProducts] = useState([])

useEffect(()=>{
setProducts(categoriesMap[category])
},[categoriesMap,category])
  return (
    <>
    <h2 style = {{position:"relative", left:"600px"}} >{category.toUpperCase()}</h2>
    <div className='Product-data-show' >
      {products &&
        products.map((product)=>{
            return(
                <>
                <ProductCard key = {category} product = {product}  />
                </>
            )
        })
      }
    </div>
    </>
  )
}

export default ParticularCategory
