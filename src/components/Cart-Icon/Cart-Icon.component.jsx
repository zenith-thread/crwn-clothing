import { CartIconContainer, ItemCount, ShopIconStyle} from './Cart-Icon.styles'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const CartIcon = () => {

    const {isCartOpen, setIsCartOpen, totalItems} = useContext(CartContext)


    const toggleCart = () => setIsCartOpen(!isCartOpen)

    return(
        <CartIconContainer onClick={toggleCart}>
            <ShopIconStyle/>
            <ItemCount>{totalItems}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;