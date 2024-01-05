import { useState } from "react";
import { createAuthUserEmailAndPassword, createUserDocumentFromGoogleAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../../components/Form-inputs/form-inputs.component'
import './Sign-Up-Form.styles.scss'
import Button from '../../components/Button/Button.component'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormFields({...formFields, [name]: value})
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            alert('password didnt match!')
            return;
        }
        try {
            const response = await createAuthUserEmailAndPassword(email, password)
            const userDocRef = await createUserDocumentFromGoogleAuth(response.user, { displayName }) 
        } catch(e) {
            if(e.code === 'auth/email-already-in-use') {
                alert("Email already in Use!")
            } else {
                console.log(e)
            }
        }
    }

    return (
        <div className="sign-up-form">
            <h2>Dont have an account?</h2>
            <span>Sign up with your Email and Password</span>
            <form onSubmit={submitHandler}>
                <FormInput label='Display Name' type="text" required onChange={handleChange} name="displayName" value={displayName}/>
                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password}/>
                <FormInput label='Confirm Password' type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )

}

export default SignUpForm;