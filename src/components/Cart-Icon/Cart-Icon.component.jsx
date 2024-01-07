import './Cart-Icon.styles.scss'
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {

    const {isCartOpen, setIsCartOpen} = useContext(CartContext)

    const toggleCart = () => setIsCartOpen(!isCartOpen)

    return(
        <div className='cart-icon-container' onClick={toggleCart}>
            <ShopIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;