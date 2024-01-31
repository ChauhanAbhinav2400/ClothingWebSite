import React from 'react'
import "../Components/ProductCard/ProductCard.css"
import CategoryPreview from '../Components/Category-Preview/CategoryPreview';
import {useSelector} from "react-redux";
import {categorySelector} from "../store/Category/CategorySelector";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(categorySelector)
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
