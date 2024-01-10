import {ProductCartContainer, Footer, Name, Price} from './Product-card.styles.jsx'

import Button, {BUTTON_TYPE_CLASSES} from '../Button/Button.component'

import { useSelector, useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action.js'
import { selectCartItems } from '../../store/cart/cart.selectors.js'

const ProductCard = ({product}) => {

    const dispatch = useDispatch()

    const {name, price, imageUrl} = product
    const cartItems = useSelector(selectCartItems)

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

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