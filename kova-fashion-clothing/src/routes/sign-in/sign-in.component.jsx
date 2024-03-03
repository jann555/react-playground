import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const signInGoogleUser = async () =>{
        const { user } = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={signInGoogleUser}>Sign In with Google</button>
        </div>
    )
}

export default SignIn;