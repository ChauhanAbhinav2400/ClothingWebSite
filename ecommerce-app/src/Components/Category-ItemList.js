import React from 'react'
import {useNavigate} from "react-router-dom"
const CategoryItemList = ({category}) => {
    const {title,imageurl} = category;

  const   Navigate = useNavigate()

  const gotoParticularCategory = ()=>{
    Navigate(`/shop/${title.toLowerCase()}`)
  }
  return (
   <>
    <div  className="body-conatiner">
    <div className="body-conatainer2"  >
    <img src={imageurl}  className = "image" alt={title}  width="389px" height="290px" />
      <div className="body-conatainer3">
        <h2  style={{color:"orange",fontWeight:"bold"}} >{title}</h2>
<button style={{backgroundColor:"blue",color:"white",cursor:"pointer",padding:"5px"}}  onClick = {()=>gotoParticularCategory()} >Shop Now</button>
      </div>
    </div>
   </div>

   </>
  )
}

export default CategoryItemList
