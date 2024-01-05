import './SignIn.styles.scss'

import SignUpForm from '../../components/Sign-Up-Form/Sign-Up-Form.component'
import SignInForm from '../../components/Sign-In-Form/Sign-In-Form.component'

const SignIn = () => {
    return (
        <div className='sign-in-page'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default SignIn;