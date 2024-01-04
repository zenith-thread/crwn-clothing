import { Fragment } from "react";
import { signInWithGooglePopUp, createUserDocumentFromGoogleAuth } from "../../utils/firebase/firebase";

const SignIn = () => {
    
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp()
        const userDocRef = await createUserDocumentFromGoogleAuth(user)
    }
    
    return (
        <Fragment>
            <h2>I am Sign In Page</h2>
            <button onClick={logGoogleUser}>Sign in With Google pop up</button>
        </Fragment>
    )
}

export default SignIn;