import React from 'react'
import {Outlet} from "react-router-dom"
import {CategoryMenu} from "../Components/Category-menu"

import CategoryItem from '../Components/Category-item';
const Home = () => {

  return (
    <>
    <Outlet />
    <CategoryItem categories = {CategoryMenu} />
    </>
  )
}

export default Home
