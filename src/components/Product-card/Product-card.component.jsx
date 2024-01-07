import './Product-card.styles.scss'

import Button from '../Button/Button.component'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const ProductCard = ({product}) => {

    const {name, price, imageUrl} = product
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}-image`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard