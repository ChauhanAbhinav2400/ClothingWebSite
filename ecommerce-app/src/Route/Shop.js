import React, { Fragment, useEffect } from 'react'
import {Routes,Route} from "react-router-dom"
import CategoriesPreview from './CategoriesPreview'
import ParticularCategory from './ParticularCategory/ParticularCategory'
import {getcategoriesAndDocuments} from "../Firebase/Firebase.utils.js";
import {setCategories} from "../store/Category/Category.action.js";
import {useDispatch} from "react-redux"

const Shop = () => {
const dispatch = useDispatch()
  useEffect(()=>{
    const getcategoriesMap = async()=>{
    const categoriesArray =   await  getcategoriesAndDocuments()
    console.log(categoriesArray)
    dispatch(setCategories(categoriesArray))
    }
    getcategoriesMap()
 },[])

  return (
    <Fragment>
<Routes>
  <Route index element = {<CategoriesPreview />}      />
  <Route path = ":category" element = {<ParticularCategory />}      />
</Routes>
  </Fragment>
     
  )
}

export default Shop
