import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    
    const isItemInCart = cartItems.find(cartItem => cartItem.id === productToAdd.id)

    if(isItemInCart) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? 
            {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem
            )
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    if (cartItemToRemove.quantity > 1) {
        return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? 
            {...cartItem, quantity: cartItem.quantity - 1} 
            : cartItem
            )
    } else {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
}

const deleteCartItem = (cartItems, cartItemToDelete) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToDelete.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
    setIsCartOpen: () => {},
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    deleteItemFromCart: () => {},
})


export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const deleteItemFromCart = (cartItemToDelete) => {
        setCartItems(deleteCartItem(cartItems, cartItemToDelete))
    }

    useEffect(() => {
        const newTotalItems = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setTotalItems(newTotalItems)
    }, [cartItems])

    useEffect(() => {
        const newTotalPrice = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0)
        setTotalPrice(newTotalPrice)
    }, [cartItems])



    const value = {isCartOpen, 
                    totalItems, 
                    totalPrice,
                    cartItems, 
                    addItemToCart, 
                    removeItemFromCart, 
                    deleteItemFromCart, 
                    setIsCartOpen, 
                    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}