import './categories-preview.styles.scss'

import { Fragment, useContext } from "react"
import { ProductsContext } from '../../contexts/products.context'

import CategoryPreview from '../../components/Category-preview/Category-preview.component'

const CategoriesPreviewPage = () => {

    const {products} = useContext(ProductsContext)

    return (
        <Fragment>
            {
                Object.keys(products).map(title => {
                    const categoryProducts = products[title]
                    return <CategoryPreview key={title} title={title} products={categoryProducts}/>
                })
            }
        </Fragment>
    )
}

export default CategoriesPreviewPage

