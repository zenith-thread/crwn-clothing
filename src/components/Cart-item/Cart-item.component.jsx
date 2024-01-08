import { CartItemContainer, ItemDetails, Name, Price, Img } from './Cart-item.styles'

const CartItem = ({cartItem}) => {

    const {name, quantity, price, imageUrl} = cartItem

    return(
        <CartItemContainer>
            <Img src={imageUrl} alt={`${name}-image`}/>
            <ItemDetails>
                <Name>{name}</Name>
                <Price> {quantity} x {price}</Price>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;