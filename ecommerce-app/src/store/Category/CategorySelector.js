import {createSelector} from "reselect"

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice)=>categoriesSlice.categories
);          

export const categorySelector = createSelector(
    [selectCategories],
    (categories) => { 
        console.log("selector fired")
    return categories.reduce((acc,category)=>{
      const {title,items} = category
      acc[title.toLowerCase()] = items;
      return acc;
    },{})}
);