const initialState = {
    categories:[],
}

export const categoryReducer = (state =initialState,action ) =>{
const {type,payload} = action ;
switch(type){
case "SET_CATEGORY_VALUE" :
    return {
        ...state,
        categories:payload
    }
    default:return state;
}
}



