import React, { Fragment } from 'react'
import {Routes,Route} from "react-router-dom"
import CategoriesPreview from './CategoriesPreview'
import ParticularCategory from './ParticularCategory/ParticularCategory'

const Shop = () => {
   
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
