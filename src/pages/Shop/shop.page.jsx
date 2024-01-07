import './shop.styles.scss'

import { Routes, Route } from 'react-router-dom'

import CategoriesPreviewPage from '../categories-preview/categories-preview.page'
import CategoryPage from '../category/category.page'

const Shop = () => {

    return (
     <Routes>
        <Route index element={<CategoriesPreviewPage />}/>
        <Route path=':category' element={<CategoryPage />}/>
     </Routes>
    )
}

export default Shop