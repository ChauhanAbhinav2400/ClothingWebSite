const initialState = {
    categories:[],
    isLoading:false,
    error:null
}

export const categoryReducer = (state =initialState,action ) =>{
const {type,payload} = action ;
switch(type){

    // case "SET_CATEGORY_VALUE" :
    //     return {
    //         ...state,
    //         categories:payload,
            
    //     }

case "SET_CATEGORY_VALUE_START" :
    return {
        ...state,
       isLoading:true
    }

    case "SET_CATEGORY_VALUE_SUCCESS" :
    return {
        ...state,
        categories:payload,
        isLoading:false
    }

    case "SET_CATEGORY_VALUE_FAILED" :
    return {
        ...state,
        error:payload,
        isLoading:false
    }
    default:return state;
}
}



