import { initializeApp } from "firebase/app";
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZuuaRZxR7z3g0dRNrWHLCbAT1_AFV6o8",
  authDomain: "kova-fashion-db.firebaseapp.com",
  projectId: "kova-fashion-db",
  storageBucket: "kova-fashion-db.appspot.com",
  messagingSenderId: "930385176951",
  appId: "1:930385176951:web:7a8d8776ce39b428f55972"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapsshot = await getDoc(userDocRef);

    if (!userSnapsshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
    
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });

        }catch (error){
            console.error('Error Creating user', error.message)
        }
    }
    return userDocRef;
}