import { useState, useContext } from "react";
import './sign-in-form.styles.scss';
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../context/user.context";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";


const defaultFormfields = {
    email: '',
    password: '',
}

const SignInForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormfields);
    const { email, password } = formFields;
    const { setCurrentUser } = useContext(UserContext);

    
    const handleChange = (event) => {
        const { name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const resetFormFields = () =>{
        setFormFields(defaultFormfields);
    }

    const handleOnSignIn = async (event) =>{
        event.preventDefault();

        const { email, password } = formFields;

        if ( !email && !password){
            alert('Please enter password and email');
        }

        try {
            const { user } = await signInUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            resetFormFields();
        } catch (error){

            switch(error.code) {
                case 'auth/invalid-credential':
                    alert('Wrong email/password combination');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    console.error('Error: ', error.code);
            }
        }
    }


    const handleOnGoogleSignIn = async (event) =>{
        event.preventDefault();
        const { user } = await signInWithGooglePopup();
        setCurrentUser(user);
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
                    <Button type="button" buttonType='google' onClick={handleOnGoogleSignIn}>
                        Google Sign In
                    </Button>
                </div>
                
            </form>
        </div>
    )

}

export default SignInForm;
