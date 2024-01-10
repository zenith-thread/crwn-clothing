import { CART_ACTION_TYPES } from "./cart..types";
import { addCartItem, removeCartItem, deleteCartItem, createAction } from '../../helperFunctions/reducers-helper-functions'


// Below functions using helper functions.
// These are used to generate payload for cartReducer payload (Action) 

export const setIsCartOpen = (bool) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool) 
    
export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = (addCartItem(cartItems, productToAdd))
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = (removeCartItem(cartItems, cartItemToRemove))
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const deleteItemFromCart = (cartItems, cartItemToDelete) => {
    const newCartItems = (deleteCartItem(cartItems, cartItemToDelete))
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}