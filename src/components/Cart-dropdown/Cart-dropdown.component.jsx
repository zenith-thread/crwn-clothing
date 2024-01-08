import {CartDropDownContainer, CartItems, EmptyMessage}  from './Cart-dropdown.styles'

import Button from '../Button/Button.component'
import CartItem from '../Cart-item/Cart-item.component'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext)

    //Navigation to Checkout
    const navigate = useNavigate()
    const checkoutNavigationHandler = () => {
      navigate('/checkout')
    }

    return(
        <CartDropDownContainer>
            <CartItems>
            { cartItems.length ? cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>
            ) : (
                <EmptyMessage>Your cart is empty</EmptyMessage>
            )}
            </CartItems>
            <Button onClick={checkoutNavigationHandler}>GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    )
}
export default CartDropdown;