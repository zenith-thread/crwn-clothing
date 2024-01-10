// Styled Components
import { NavBar, NavLink, LogoContainer, NavLinksContainer} from './Navigation.styles'

import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent  as CrwnLogo} from '../../assets/083 crown.svg'

import CartIcon from '../../components/Cart-Icon/Cart-Icon.component';
import CartDropdown from '../../components/Cart-dropdown/Cart-dropdown.component'

import { signOutUser } from '../../utils/firebase/firebase.utils';

// Redux 
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selectors';

const Navigation = () => {

    // Fetching data from the Redux Store
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

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