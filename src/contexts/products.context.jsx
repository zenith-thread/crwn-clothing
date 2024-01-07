import { useState, createContext } from "react"

import PRODUCTS from '../shop-data.json'


// PRODUCT CONTEXT 

// Context / Storage
export const ProductsContext = createContext({
    products: [],
    setProduct: () => null,
})

// Product Context Provider 
export const ProductsProvider = ({children}) => {
    const [products, setProduct] = useState(PRODUCTS)
    const value = {products}

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}