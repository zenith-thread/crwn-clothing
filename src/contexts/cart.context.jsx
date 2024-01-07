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

export const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    totalItems: 0,
    setIsCartOpen: () => {},
    addItemToCart: () => {},
})


export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    useEffect(() => {
        const newTotalItems = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setTotalItems(newTotalItems)
    }, [cartItems])


    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, totalItems}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}