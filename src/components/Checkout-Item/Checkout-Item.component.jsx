import { CheckoutItemContainer, ImgContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton } from './Checkout-Item.styles'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckOutItem = ({cartItem}) => {

    const {name, imageUrl, price, quantity} = cartItem

    const {addItemToCart, removeItemFromCart, deleteItemFromCart} = useContext(CartContext)

    return (
        <CheckoutItemContainer>
            <ImgContainer>
                <img src={imageUrl} alt={`${name}-image`}/>
            </ImgContainer>
            <BaseSpan>{name}</BaseSpan>
                <Quantity>
                    <Arrow onClick={() => removeItemFromCart(cartItem)}>&#10094; </Arrow>
                    <Value>{quantity}</Value> 
                    <Arrow onClick={() => addItemToCart(cartItem)}>&#10095;</Arrow>
                </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={() => deleteItemFromCart(cartItem)}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckOutItem