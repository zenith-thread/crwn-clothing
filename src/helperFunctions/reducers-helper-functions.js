// HELPER FUNCTIONS USED FOR CART CONTEXT AND CART REDUCER

export const addCartItem = (cartItems, productToAdd) => {
    
    const isItemInCart = cartItems.find(cartItem => cartItem.id === productToAdd.id)

    if(isItemInCart) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? 
            {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem
            )
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const removeCartItem = (cartItems, cartItemToRemove) => {
    if (cartItemToRemove.quantity > 1) {
        return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? 
            {...cartItem, quantity: cartItem.quantity - 1} 
            : cartItem
            )
    } else {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
}

export const deleteCartItem = (cartItems, cartItemToDelete) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToDelete.id)
}

// CREATE ACTION FOR DISPATCH

export const createAction = (type, payload) => ({type, payload}) 