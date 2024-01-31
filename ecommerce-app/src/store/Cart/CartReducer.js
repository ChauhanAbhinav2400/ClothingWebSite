const Initialstate = {
    cartData : [],
    cartTotal:0,
    cartcount:0,
    isCartOpen : false,
}

 export const Cartreducer = (state= Initialstate,action)=>{console.log(action)
    console.log(state)
const {type,payload} = action
    switch(type){
case "SET_CART_VALUES":
    return {
        ...state,
        cartData:payload
    }
    case "CART_OPEN_CLOSE":
        return {
            ...state,
            isCartOpen:payload
        }
    default: return state;
    }
  
}
