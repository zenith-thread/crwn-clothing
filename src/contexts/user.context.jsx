import { createContext, useState, useEffect } from "react";
import { onAuthObservableListener, createUserDocumentFromGoogleAuth } from '../utils/firebase/firebase.utils'


// USER CONTEXT  

//Storage / Context
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
}) 

// User Context Provider 
export const UserProvider = ({children}) => {
 
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser}

    // Using UseEffect to unmount onAuthListener after the state is changed to prevent memory leak 
    // and stop it from listening all the time
    useEffect(() => {
        const unsubscribe = onAuthObservableListener((user) => {
            setCurrentUser(user)    //setting the currentUser in the user context by the authListener
            if(user) {
                createUserDocumentFromGoogleAuth(user)
            }
        })
        return unsubscribe;
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}