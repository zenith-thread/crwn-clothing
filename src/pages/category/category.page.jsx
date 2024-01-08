import {CategoryTitle, CategoryContainer} from './category.styles.jsx'

import { useContext, useState, useEffect, Fragment } from "react"
import { useParams } from 'react-router-dom'
import { ProductsContext } from "../../contexts/products.context"

import ProductCard from "../../components/Product-card/Product-card.component"

const CategoryPage = () => {

    let { category } = useParams()
    const { products } = useContext(ProductsContext)

    const [ categoryProducts, setCategoryProducts ] = useState(products[category])
    useEffect(() => {
        setCategoryProducts(products[category])
    }, [category, products])

    return(
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
            {
                // console.log(category)
                categoryProducts && categoryProducts.map(product => <ProductCard key={product.id} product={product}/>)
            }
            </CategoryContainer>
        </Fragment>
    )
}

export default CategoryPage