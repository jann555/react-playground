import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up-form.styles.scss';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const defaultFormfields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormfields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const resetFormFields = () =>{
        setFormFields(defaultFormfields);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword } = formFields;

        if ( password !== confirmPassword){
            alert('Password and Confirm Password fields do not match');
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            // passing displayName as an additional parameter since user does not have one
            await createUserDocumentFromAuth({...user, displayName});

            resetFormFields();
        }catch(error){
            if (error.code === 'auth/email-already-in-use'){
                alert('Cannot create user. User email is already in use');
            }
            console.error('User creation encountered an error: ', error);
        }

    }
    return (
        <div className="sign-up-container">
            <h2>Don't have an account? Sign Up</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Display Name" 
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName}
                />
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
                <FormInput 
                    label="Confirm Password" 
                    type="password" 
                    required 
                    onChange={handleChange}  
                    name="confirmPassword"  
                    value={confirmPassword}/>
                
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;