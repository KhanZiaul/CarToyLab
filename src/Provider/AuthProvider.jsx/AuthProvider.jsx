import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)

    function createUser(email,password){
        setLoading(false)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function signInUser(email,password){
        setLoading(false)
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut(){
        setLoading(false)
        return signOut(auth)
    }

    function resetPassword(email){
        return sendPasswordResetEmail(auth,email)
    }

    function signInPopup(provier) {
        setLoading(false)
        return signInWithPopup(auth, provier)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
          });
          return ()=>{
            return unsubscribe()
          }
    },[])

    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut,
        resetPassword,
        loading,
        signInPopup
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;