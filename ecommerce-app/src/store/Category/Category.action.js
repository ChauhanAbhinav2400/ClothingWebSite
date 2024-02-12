

//  export  const setCategories = (categoryValue)=>{
// return {
//     type:"SET_CATEGORY_VALUE",
// payload:categoryValue
// }
//  }
 export const fetchCategoryStart = ()=>({type:"SET_CATEGORY_VALUE_START"})


 export const fetchCategorySuccess = (categoryValue)=>{
    return{
        type:"SET_CATEGORY_VALUE_SUCCESS",
        payload:categoryValue
    }
}

 export const fetchCategoryFailed = (categoryValue)=>{
    return{
        type:"SET_CATEGORY_VALUE_FAILED",
        payload:categoryValue
    }
}







