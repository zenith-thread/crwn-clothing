import {ProductCartContainer, Footer, Name, Price} from './Product-card.styles.jsx'

import Button, {BUTTON_TYPE_CLASSES} from '../Button/Button.component'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const ProductCard = ({product}) => {

    const {name, price, imageUrl} = product
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)

    return (
        <ProductCartContainer>
            <img src={imageUrl} alt={`${name}-image`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</Button>
        </ProductCartContainer>
    )
}

export default ProductCard