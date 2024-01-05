import './Navigation.styles.scss'

import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent  as CrwnLogo} from '../../assets/083 crown.svg'

//Usage of the Context
import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'

import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {

    //leverageing UserContext 
    const { currentUser } = useContext(UserContext)
    
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
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;