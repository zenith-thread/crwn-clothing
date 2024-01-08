import {DirectoryContainer, DirectoryBody, BackgroundImage} from './category-item.styles.jsx'

import { useNavigate } from 'react-router-dom'

const CategoryItem = ({category}) => {
    
    const {title, imageUrl, route} = category
    const navigate = useNavigate()

    const navigateHandler = () => navigate(route)

    return (
      <DirectoryContainer onClick={navigateHandler}>
            <BackgroundImage imageUrl={imageUrl}/>
            <DirectoryBody>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </DirectoryBody>
        </DirectoryContainer>
    )
}

export default CategoryItem;