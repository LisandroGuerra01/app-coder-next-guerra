/* eslint-disable react/prop-types */
'use client'
import { auth, provider } from "@/firebase/config";
import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";

//Creando contexto de auth
const AuthContext = createContext();

//Hook para usar el contexto de auth
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context
}


//Proveedor de autenticacion
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    });

    // //Cargar datos de usuario desde localStorage al iniciar
    // useEffect(() => {
    //     const storedUser = localStorage.getItem('user');
    //     if (storedUser) {
    //         setUser(JSON.parse(storedUser));
    //     }
    // }, []);

    // //Guardar datos de usuario en localStorage cuando se modifique
    // useEffect(() => {
    //     if (user.logged) {
    //         localStorage.setItem('user', JSON.stringify(user));
    //     } else {
    //         localStorage.removeItem('user');
    //     }
    // }, [user]);

    // const [loading, setLoading] = useState(true);

    const signup = async (values) => {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        console.log(userCredential);

        const user = userCredential.user;
        setUser({
            logged: true,
            email: user.email,
            uid: user.uid
        });
    };

    const loginUser = async (values) => {
        const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);

        const user = userCredential.user;
        setUser({
            logged: true,
            email: user.email,
            uid: user.uid
        });
    };

    const googleLogin = async () => {
        await signInWithPopup(auth, provider);
    };

    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    uid: user.uid
                });
            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                });
            }
        })
    }, []);



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
        <AuthContext.Provider value={{ user, signup, loginUser, googleLogin, logout }}>
            {children}
        </AuthContext.Provider>
    );
};