import './Cart-dropdown.styles.scss'

import Button from '../Button/Button.component'

const CartDropdown = () => {

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'/>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}
export default CartDropdown;