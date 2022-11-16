import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth"
import app from '../Firebase/firebase.config';
import { set } from 'date-fns/esm';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (userInfo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo);
    }
    const logOut = () =>{
        return signOut(auth);
    }

    const authInfo = {
        createUser, login, user, logOut, updateUser, loading
    }
    useEffect(() =>{
       const unSubcribe =  onAuthStateChanged(auth, currentUser =>{
            console.log("user Observing");
            setUser(currentUser);
            setLoading(false);
        } )

        return () => unSubcribe();
    }, [])
    return (
        <AuthContext.Provider
        value={authInfo}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;