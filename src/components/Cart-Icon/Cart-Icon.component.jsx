import { CartIconContainer, ItemCount, ShopIconStyle} from './Cart-Icon.styles'

import { useSelector, useDispatch } from 'react-redux'
import { selectIsCartOpen, selectCartCount  } from '../../store/cart/cart.selectors'
import { setIsCartOpen } from '../../store/cart/cart.action'

const CartIcon = () => {

    const dispatch = useDispatch()

    const isCartOpen = useSelector(selectIsCartOpen)
    const totalItems = useSelector(selectCartCount)

    const toggleCart = () => dispatch(setIsCartOpen(!isCartOpen))

    return(
        <CartIconContainer onClick={toggleCart}>
            <ShopIconStyle/>
            <ItemCount>{totalItems}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;