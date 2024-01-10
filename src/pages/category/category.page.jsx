import {CategoryTitle, CategoryContainer} from './category.styles.jsx'

import { useState, useEffect, Fragment } from "react"
import { useParams } from 'react-router-dom'

import ProductCard from "../../components/Product-card/Product-card.component"

import { useSelector } from "react-redux"
import { selectCategoryMap } from '../../store/categories/categories.selector.js' 

const CategoryPage = () => {

    const { category } = useParams()
    const products = useSelector(selectCategoryMap)
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