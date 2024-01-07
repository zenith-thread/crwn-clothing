import { useState, createContext, useEffect } from "react"

import { getCategoryAndDocuments } from '../utils/firebase/firebase.utils.js'

// PRODUCT CONTEXT 

// Context / Storage
export const ProductsContext = createContext({
    products: [],
    setProduct: () => null,
})

// Product Context Provider 
export const ProductsProvider = ({children}) => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        const getCategoryMap = async () => {
            const CategoryMap = await getCategoryAndDocuments()
            setProduct(CategoryMap)
        }
        getCategoryMap()
    }, [])
    

    const value = {products}

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}