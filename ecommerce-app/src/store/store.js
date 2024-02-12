import {createStore,applyMiddleware,compose } from "redux";
import logger from "redux-logger";
import {rootReducer} from "./rootReducer";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
// import thunk from "redux-thunk"

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
    whitelist:["cart"]
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig,rootReducer)

const middlewares = [process.env.NODE_ENV !== "production" && logger,sagaMiddleware].filter(Boolean)

const composeEnchancer = (process.env.NODE_ENV  !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)||compose;

const composedEnhancers = composeEnchancer(applyMiddleware(...middlewares))
 export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
    );

sagaMiddleware.run(rootSaga)


export const persistor = persistStore(store)
