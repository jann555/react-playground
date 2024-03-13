import { initializeApp } from "firebase/app";
import {
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZuuaRZxR7z3g0dRNrWHLCbAT1_AFV6o8",
  authDomain: "kova-fashion-db.firebaseapp.com",
  projectId: "kova-fashion-db",
  storageBucket: "kova-fashion-db.appspot.com",
  messagingSenderId: "930385176951",
  appId: "1:930385176951:web:7a8d8776ce39b428f55972"
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(obj => {
        const docRef = doc(collectionRef, obj.title.toLowerCase());
        batch.set(docRef, obj);
    });

    await batch.commit();
}

export const getCategoriesAndDocuments = async() =>{
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;

}

export const createUserDocumentFromAuth = async (
    userAuth,
    ) => {
    if (!userAuth) return;

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
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || ! password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserWithEmailAndPassword = async (email, password) => {
    if(!email || ! password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => signOut(auth);
export const onAuthStateChangedListerner = (callback) => onAuthStateChanged(auth, callback);