import './category-item.styles.scss'

const CategoryItem = ({category}) => {
    
    const {title, imageUrl} = category

    return (
      <div className="directory-container">
            <div className="background-image" style={{
              backgroundImage: `url(${imageUrl})`
            }}/>
            <div className="directory-body">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem;