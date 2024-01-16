import {createContext, useState,useEffect} from "react";
// import ShopData from "../Shop-data.js";
import {getcategoriesAndDocuments} from "../Firebase/Firebase.utils.js"

 export const CategoriesContext = createContext({
   categoriesMap:{},

 })

 export const CategoriesProvider = ({children})=>{
const [categoriesMap,setCategoriesMap] = useState({})

useEffect(()=>{
   const getcategoriesMap = async()=>{
   const categoryMap =   await  getcategoriesAndDocuments()
   setCategoriesMap(categoryMap)
   }
   getcategoriesMap()
},[])

const value = {categoriesMap}
return (
<CategoriesContext.Provider value = {value}>{children}</CategoriesContext.Provider>
)
}











