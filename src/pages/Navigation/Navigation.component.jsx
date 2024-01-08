// Styled Components
import { NavBar, NavLink, LogoContainer, NavLinksContainer} from './Navigation.styles'

import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent  as CrwnLogo} from '../../assets/083 crown.svg'

import CartIcon from '../../components/Cart-Icon/Cart-Icon.component';
import CartDropdown from '../../components/Cart-dropdown/Cart-dropdown.component'

//Usage of the Context
import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {

    //leverageing UserContext 
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    return(
      <Fragment>
        <NavBar>
            <LogoContainer to='/'>
                <CrwnLogo className="logo"/>
            </LogoContainer>
            <NavLinksContainer>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='/shop'>SHOP</NavLink>
                <NavLink to='/contact-us'>CONTACT US</NavLink>
                {currentUser ? 
                  (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) 
                  : (<NavLink to='/sign-in'>SIGN IN</NavLink>) 
                }
                <CartIcon />
            </NavLinksContainer>
            {isCartOpen && <CartDropdown />}
        </NavBar>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;