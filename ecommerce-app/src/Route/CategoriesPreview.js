import React, { useContext,Fragment } from 'react'
import {CategoriesContext} from "../userContext/ProductContent"
import "../Components/ProductCard/ProductCard.css"
import CategoryPreview from '../Components/Category-Preview/CategoryPreview';

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext)
 console.log(categoriesMap)
  return (
    <>
    
  {
    Object.keys(categoriesMap).map(title=>{
const products = categoriesMap[title];
   
return (
  <div  >
   <CategoryPreview key = {title} title= {title} products= {products} />
   </div>
)
      }) 
    }
  
  </>
     
  )
}

export default CategoriesPreview
