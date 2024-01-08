import { SignInPage } from './SignIn.styles'

import SignUpForm from '../../components/Sign-Up-Form/Sign-Up-Form.component'
import SignInForm from '../../components/Sign-In-Form/Sign-In-Form.component'

const SignIn = () => {
    return (
        <SignInPage>
            <SignInForm />
            <SignUpForm />
        </SignInPage>
    )
}

export default SignIn;