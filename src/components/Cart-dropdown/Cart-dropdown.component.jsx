import './Cart-dropdown.styles.scss'

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
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            {
            cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>
            )}
            </div>
            <Button onClick={checkoutNavigationHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}
export default CartDropdown;