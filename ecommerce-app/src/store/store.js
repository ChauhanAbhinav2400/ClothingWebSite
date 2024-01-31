import {createStore,applyMiddleware,compose } from "redux";
import logger from "redux-logger";
import {rootReducer} from "./rootReducer";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
// const loggerMiddleware = (store)=>(next)=>(action) =>{
//     if(!action.type){
// return next(action);
//     }

//     // console.log("type",action.type);
//     // console.log("payload",action.payload)
//     // console.log("currentState:",store.getState())

//     next(action);
//     // console.log("nextstate" , store.getState())
// }

const persistConfig = {
    key :"root",
    storage,
    blacklist:["user"]
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const middlewares = [process.env.NODE_ENV !== "production" && logger].filter(Boolean)

const composeEnchancer = (process.env.NODE_ENV  !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)||compose;

const composedEnhancers = composeEnchancer(applyMiddleware(...middlewares))
 export const store = createStore(persistedReducer,undefined,composedEnhancers)


export const persistor = persistStore(store)
