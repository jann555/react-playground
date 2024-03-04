import { useState } from "react";
import './sign-in-form.styles.scss';
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { signInWithGooglePopup, createUserDocumentFromAuth, signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";


const defaultFormfields = {
    email: '',
    password: '',
}

const SignInForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormfields);
    const { email, password } = formFields;

    
    const handleChange = (event) => {
        const { name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleOnSignIn = async (event) =>{
        event.preventDefault();

        const { email, password } = formFields;

        if ( !email && !password){
            alert('Please enter password and email');
        }

        try {
            const { user } = await signInUserWithEmailAndPassword(email, password);
            console.log(user);
        } catch (error){
            console.error('There has been an error authenticating user: ', error);
        }
    }


    const handleOnGoogleSignIn = async (event) =>{
        event.preventDefault();
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }


    return (
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleOnSignIn}>
                <FormInput 
                    label="Email" 
                    type='email' 
                    required 
                    onChange={handleChange}  
                    name="email"  
                    value={email}
                    />
                <FormInput 
                    label="Password" 
                    type="password" 
                    required 
                    onChange={handleChange}  
                    name="password"  
                    value={password}
                />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button buttonType='google' onClick={handleOnGoogleSignIn}>
                        Google Sign In
                    </Button>
                </div>
                
            </form>
        </div>
    )

}

export default SignInForm;
