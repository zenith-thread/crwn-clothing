/*
==========================
    SIGN IN FORM WITH 
    EMAIL AND PASSWORD
            &
    SING IN WITH GOOGLE
==========================
*/
import './Sign-In-Form.styles.scss'

import { useState } from "react";
import { signInAuthUserEmailAndPassword } from '../../utils/firebase/firebase.utils'
import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";

import FormInput from '../Form-inputs/form-inputs.component'
import Button from '../Button/Button.component'


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
            if(e.code === 'auth/invalid-credential') {
                alert('Invalid Email or password')
            } else {
                console.log(e)
            }
        }
    }

    //Sigin with Google Auth
    const logGoogleUser = async () => {
    
        try{
            const {user} = await signInWithGooglePopUp()
        } catch(e) {
            switch(e) {
                case 'auth/network-request-failed':
                    alert("Network Error: Try Signing in again")
                    break
                default:
                    alert(e.message)
            }
        }
        
    }

    return (
        <div className="sign-in-form">
            <h2>I already have an account</h2>
            <span>Sign In with your Email and Password</span>
            <form onSubmit={submitHandler}>
                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password}/>
                <div className='signIn-form-buttons'>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={logGoogleUser}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )

}

export default SignInForm;