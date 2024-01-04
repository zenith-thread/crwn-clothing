import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent  as CrwnLogo} from '../../assets/083 crown.svg'

import './Navigation.styles.scss'

const Navigation = () => {
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
                <Link className="nav-link" to='/sign-in'>SIGN IN</Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;