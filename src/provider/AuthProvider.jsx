import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    // 
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // 
    const loginOut = () => {
        return signOut(auth);
    }

    // 
    const authInfo = {
        user,
        loading,
        error,
        setError,
        login,
        createUser,
        loginOut,
        setUser,
    }

    useEffect(
        () => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                setLoading(false);
            })

            //stop observing
            return () => {
                return unsubscribe();
            }
        }
        , [])

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;