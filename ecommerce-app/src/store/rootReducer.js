import {combineReducers} from "redux";
import {userReducer} from "./user/userReducer"
import { categoryReducer } from "./Category/CategoryReducer";
import {Cartreducer} from "./Cart/CartReducer"
console.log(Cartreducer)
export const rootReducer = combineReducers({
user:userReducer,
categories: categoryReducer,
cart:Cartreducer
})