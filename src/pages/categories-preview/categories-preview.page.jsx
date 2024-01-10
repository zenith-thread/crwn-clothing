import { Fragment } from "react"

import CategoryPreview from '../../components/Category-preview/Category-preview.component'

import { useSelector } from "react-redux"
import { selectCategoryMap } from "../../store/categories/categories.selector"

const CategoriesPreviewPage = () => {
    const products = useSelector(selectCategoryMap)
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

