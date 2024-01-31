

const initialState = {
    current: null
}

export const userReducer = (state = initialState, action) => {
    // console.log("dispatched")
    const { type, payload } = action

    switch (type) {
        case "SET_USER":
            return {
                ...state,
                current: payload
            }
        default:
            return state; // Make sure to include a default case that returns the current state
    }
}