import './Navigation.styles.scss'

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
        <div className="nav-bar">
            <Link className="logo-container" to='/'>
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/'>HOME</Link>
                <Link className="nav-link" to='/shop'>SHOP</Link>
                <Link className="nav-link" to='/contact-us'>CONTACT US</Link>
                {currentUser ? 
                  (<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>) 
                  : (<Link className="nav-link" to='/sign-in'>SIGN IN</Link>) 
                }
                <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;