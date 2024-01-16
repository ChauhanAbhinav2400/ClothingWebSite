import {createContext, useEffect, useReducer, useState} from "react";
import {onAuthStateChangedListner,signout,createUserDocumentFromAuth} from "../Firebase/Firebase.utils";

const reducer = (state,action)=>{
    console.log("dispatched")
    const {type,payload} = action
switch(type){
case "SET_USER" :
     return{
        ...state,
      current : payload
     } 
}
}


export const UserContext = createContext({
    current:null,
    setCurrent:()=>null
})

const intialstate = {
    current:null
}

export const UserProvider = ({children})=>{

    const [ {current} , dispatch] = useReducer(reducer, intialstate)
console.log(current)
const setCurrent = (user)=>{
    dispatch({type:"SET_USER",payload :user})
}

    const val = {current,setCurrent}


useEffect(()=>{
 const unsubscribe = onAuthStateChangedListner((user)=>{
    if(user){
        createUserDocumentFromAuth(user)
    }
setCurrent(user)
})
return unsubscribe
},[])

    return <UserContext.Provider value = {val}>{children} </UserContext.Provider>
}








