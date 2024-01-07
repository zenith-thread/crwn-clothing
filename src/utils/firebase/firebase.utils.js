import { initializeApp } from 'firebase/app'

//FOLLOWING IMPORTS WERE DONE FOR CREATING AND SIGNING IN THE USERS IN THE FIRESTORE
import { getAuth, 
        signInWithPopup, 
        GoogleAuthProvider, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged } from 'firebase/auth'

import { getFirestore, doc, setDoc, getDoc, query  } from 'firebase/firestore' 
// import { credentialsFormatter } from '../../helperFunctions/credentialsFormatter'


// FOLLOWING IMPORTS ARE DONE FOR CREATING COLLECTIONS AND DOCUMENTS OF PRODUCTS IN THE FIRESTORE

import { collection, writeBatch, getDocs } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBVfjZkBDh8gRbz238N7NBoKAVW5ddVkIU",
    authDomain: "crwn-clothing-db-c595c.firebaseapp.com",
    projectId: "crwn-clothing-db-c595c",
    storageBucket: "crwn-clothing-db-c595c.appspot.com",
    messagingSenderId: "754534705237",
    appId: "1:754534705237:web:1f095b93dc3b549c1e4cdc"
};

const app = initializeApp(firebaseConfig)

//Authorization and provider config

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider) 

// Setting Up Firestore with firestore instance on firebase
//Retreiving user documents in the firestore database

export const db = getFirestore()

export const createUserDocumentFromGoogleAuth = async (userAuth, additionalInformation) => {
    const userDocReference = doc(db, "users", userAuth.uid)
    const userSnaphot = await getDoc(userDocReference)

    if(!userSnaphot.exists()) {
        
        const { email, displayName } = userAuth;
        const createdAt = new Date()
        
        try {
            await setDoc(userDocReference, {displayName, email, createdAt, ...additionalInformation})
        } catch(error) {
            console.log(`Error creating user: ${error.message}`)
        }
    }
    return userDocReference;
}

//Signup with Email and Password

export const createAuthUserEmailAndPassword = async (email, password) => {
    if (!email || !password) {
        return;
    }
    return await createUserWithEmailAndPassword(auth, email, password)
}

// SignIn with Email and Password

export const signInAuthUserEmailAndPassword = async (email, password) => {
    if (!email || !password) {
        return;
    }
    return await signInWithEmailAndPassword(auth, email, password)
}
export const signOutUser = async () => await signOut(auth)

/* 
    Observable Listner for Auth states.
    like Sign in state or sign out state.
    This Function will help maintaining all the Auth system in one place 
    instead of using Above methods in different places
    
*/

export const onAuthObservableListener = (callback) => onAuthStateChanged(auth, callback)

/* 

    TRANSACTIONS FOR CREATING COLLECTIONS AND WRITING DOCUMENTS IN THE FIRESTORE DATABASE
    
*/

export const addCollectionAndDocument = async  (collectionKey, documentsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db)

    documentsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    });

    await batch.commit();
    console.log("done!")
}

// Getting All the documents' data from the collection 

export const getCategoryAndDocuments = async () => {
    const collectionRef = collection(db, "categories")
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)
    
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data()
        acc[title.toLowerCase()] = items
        return acc
    }, {})
    return categoryMap
}