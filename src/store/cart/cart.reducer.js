import { CART_ACTION_TYPES } from "./cart..types"

// Initial Cart State for cartReducer

const initialState = {
    isCartOpen: false,
    cartItems: [],
}
// cartReducer

export const cartReducer = (state = initialState, action = {}) => {
    const {type, payload} = action

    switch(type) {
       case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload,
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state, 
                isCartOpen: payload,
            }
        default:
            return state
    }
}
