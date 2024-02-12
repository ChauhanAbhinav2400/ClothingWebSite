import { USER_ACTION_TYPES } from "./user.types";


const initialState = {
    current: null,
    isLoading:false,
    error:null
}

export const userReducer = (state = initialState, action) => {
    // console.log("dispatched")
    const { type, payload } = action

    switch (type) {
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                ...state,
                current: payload
            }
            case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
                return {...state,current:null}
            case USER_ACTION_TYPES.SIGN_OUT_FAILED:
            case USER_ACTION_TYPES.SIGN_IN_FAILED:
            case USER_ACTION_TYPES.SIGN_UP_FAILED:
                return {
                    ...state,
                    error: payload
                }     
        default:
            return state; // Make sure to include a default case that returns the current state
    }
}