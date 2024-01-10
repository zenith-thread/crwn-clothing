import { CheckoutItemContainer, ImgContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton } from './Checkout-Item.styles'

import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, removeItemFromCart, deleteItemFromCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selectors'

const CheckOutItem = ({cartItem}) => {

    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()

    const {name, imageUrl, price, quantity} = cartItem

    return (
        <CheckoutItemContainer>
            <ImgContainer>
                <img src={imageUrl} alt={`${name}-image`}/>
            </ImgContainer>
            <BaseSpan>{name}</BaseSpan>
                <Quantity>
                    <Arrow onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}>&#10094; </Arrow>
                    <Value>{quantity}</Value> 
                    <Arrow onClick={() => dispatch(addItemToCart(cartItems, cartItem))}>&#10095;</Arrow>
                </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={() => dispatch(deleteItemFromCart(cartItems, cartItem))}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckOutItem