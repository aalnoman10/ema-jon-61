import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    // 
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // 
    const loginOut = () => {
        return signOut(auth)
    }

    // 
    const authInfo = {
        user,
        login,
        createUser,
        loginOut,
        setUser,
    }

    useEffect(
        () => {
            onAuthStateChanged(auth, currentUser => {

                if (currentUser) {
                    setUser(currentUser)
                } else {
                }
            })
        }
        , [])

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;