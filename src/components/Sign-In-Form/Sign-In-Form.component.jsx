import './Sign-In-Form.styles.scss'

import { useState } from "react";
import { signInAuthUserEmailAndPassword } from '../../utils/firebase/firebase.utils'
import { signInWithGooglePopUp, createUserDocumentFromGoogleAuth } from "../../utils/firebase/firebase.utils";

import FormInput from '../Form-inputs/form-inputs.component'
import Button from '../Button/Button.component'


const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormFields({...formFields, [name]: value})
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await signInAuthUserEmailAndPassword(email, password)
            console.log(response)    
        }catch(e) {
            if(e.code === 'auth/invalid-credential') {
                alert('Invalid Email or password')
            } else {
                console.log(e)
            }
        }
    }
    const logGoogleUser = async () => {
    
        try{
            const {user} = await signInWithGooglePopUp()
            const userDocRef = await createUserDocumentFromGoogleAuth(user)
        } catch(e) {}
        
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