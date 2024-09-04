/* eslint-disable react/prop-types */
'use client'
import { createContext, useContext, useEffect, useState } from "react";

//Creando contexto de auth
const AuthContext = createContext();

//Hook para usar el contexto de auth
export const useAuthContext = () => useContext(AuthContext);


//Proveedor de autenticacion
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    });
    // const [loading, setLoading] = useState(true);

    // const signup = (email, password) => {
    //     return createUserWithEmailAndPassword(auth, email, password);
    // };

    // const login = (email, password) => {
    //     return signInWithEmailAndPassword(auth, email, password);
    // };

    // const logout = () => {
    //     setLoading(true);
    //     return signOut(auth);
    // };

    // const resetPassword = (email) => {
    //     setLoading(true);
    //     return sendPasswordResetEmail(auth, email);
    // };

    // const loginGoogle = () => {
    //     setLoading(true);
    //     const provider = new GoogleAuthProvider();
    //     return signInWithPopup(auth, provider);
    // };

    // const loginFacebook = () => {
    //     setLoading(true);
    //     const provider = new FacebookAuthProvider();
    //     return signInWithPopup(auth, provider);
    // };

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         setCurrentUser(user);
    //         setLoading(false);
    //     });
    //     return () => unsubscribe();
    // }, []);

    //Objeto del contexto
    // const value = {
    //     currentUser,
    //     signup,
    //     login,
    //     loginGoogle,
    //     logout,
    //     loginFacebook,
    //     resetPassword,
    // };

    //Renderizando el contexto
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};