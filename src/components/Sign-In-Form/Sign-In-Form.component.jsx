/*
==========================
    SIGN IN FORM WITH 
    EMAIL AND PASSWORD
            &
    SING IN WITH GOOGLE
==========================
*/
import { SignInFormStyles, SignInFormButtons } from './Sign-In-Form.styles.jsx'

import { useState } from "react";
import { signInAuthUserEmailAndPassword } from '../../utils/firebase/firebase.utils'
import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";

import FormInput from '../Form-inputs/form-inputs.component'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.component'


const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    //Getting Input Values from the form fields
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    //Setting Input Values 
    const handleChange = (e) => {
        const {name, value} = e.target

        setFormFields({...formFields, [name]: value})
    }

    //Signing In With Email and Password
    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const {user} = await signInAuthUserEmailAndPassword(email, password)
        }catch(e) {
            switch (e.code) {
                case 'auth/invalid-credential':
                    alert('Invalid Email or password')
                    break;
                case 'auth/network-request-failed':
                    alert('Network Error: Check your internet connection or Try Signing in again')
                    break;
                default:
                    console.log(e)
                    break;
            }
        }
    }

    //Sigin with Google Auth
    const logGoogleUser = async () => {
    
        try{
            const {user} = await signInWithGooglePopUp()
        } catch(e) {
            switch (e.code) {
                case 'auth/invalid-credential':
                    alert('Invalid Email or password')
                    break;
                case 'auth/network-request-failed':
                    alert('Network Error: Check your internet connection or Try Signing in again')
                    break;
                case "auth/internal-error": 
                    alert('Network Error: Check your internet connection or Try Signing in again')
                    break;
                default:
                    console.log(e)
                    break;
            }
        }
        
    }

    return (
        <SignInFormStyles>
            <h2>I already have an account</h2>
            <span>Sign In with your Email and Password</span>
            <form onSubmit={submitHandler}>
                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password}/>
                <SignInFormButtons>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>Google Sign In</Button>
                </SignInFormButtons>
            </form>
        </SignInFormStyles>
    )

}

export default SignInForm;