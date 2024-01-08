import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import CheckOutItem from '../../components/Checkout-Item/Checkout-Item.component'

const Checkout = () => {
    
    const { cartItems, totalPrice } = useContext(CartContext)

    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>

            {

                cartItems.map((cartItem) => <CheckOutItem key={cartItem.id} cartItem={cartItem}/>)
                    
            }
            <Total className='total'>Total: ${totalPrice}</Total>
        </CheckoutContainer>
    )
}

export default Checkout