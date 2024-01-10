import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'

import CategoriesPreviewPage from '../categories-preview/categories-preview.page'
import CategoryPage from '../category/category.page'

// CATEGORY REDUX
import { useDispatch } from 'react-redux'
import { getCategoryAndDocuments } from '../../utils/firebase/firebase.utils' 
import { setCategories } from '../../store/categories/categories.action'

const Shop = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const getCategoryMap = async () => {
            const categories = await getCategoryAndDocuments()
            console.log(categories)
            dispatch(setCategories(categories))
        }
        getCategoryMap()
    }, [])
    
    return (
     <Routes>
        <Route index element={<CategoriesPreviewPage />}/>
        <Route path=':category' element={<CategoryPage />}/>
     </Routes>
    )
}

export default Shop