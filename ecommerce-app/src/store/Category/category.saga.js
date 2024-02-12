import {all,call,takeLatest,put} from "redux-saga/effects"
import { getcategoriesAndDocuments } from "../../Firebase/Firebase.utils"
import {fetchCategorySuccess,fetchCategoryFailed} from "./Category.action"

function* fetchCategoryAsync(){

    try{
        const categoriesArray =   yield call(getcategoriesAndDocuments,"categories") 
      yield  put(fetchCategorySuccess(categoriesArray))
    }catch(error){
      yield  put(fetchCategoryFailed(error))
    }
}

  export function* onFetchCategories(){
    console.log("2")
  yield  takeLatest("SET_CATEGORY_VALUE_START",fetchCategoryAsync)
}

 export function* categoriesSaga(){
yield all([call(onFetchCategories)])
}