import React from 'react'
import CategoryItemList from './Category-ItemList'

const CategoryItem = ({categories}) => {
  return (
   <>
    <div  className="container">
   {
    categories.map((category)=>{
 
return (
    <CategoryItemList  key =  {category.id} category = {category}  />
       
  
     
)
    })
   }
    </div>
   </>
  )
}

export default CategoryItem
