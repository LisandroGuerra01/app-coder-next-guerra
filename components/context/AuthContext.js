'use client'
import { db, auth, provider } from "@/firebase/config";
import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

// Creando contexto de auth
const AuthContext = createContext();

// Hook para usar el contexto de auth
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    });

    const router = useRouter();

    // Función para guardar usuario en localStorage
    const saveUserToLocalStorage = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
    };

    // Función para remover usuario de localStorage
    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('user');
    };

    // Función para obtener usuario de localStorage
    const getUserFromLocalStorage = () => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            return JSON.parse(storedUser);
        }
        return {
            logged: false,
            email: null,
            uid: null
        };
    };

    // Función para crear un nuevo usuario
    const signup = async (values) => {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const user = userCredential.user;
        const newUser = {
            logged: true,
            email: user.email,
            uid: user.uid
        };
        setUser(newUser);
        saveUserToLocalStorage(newUser);
    };

    // Función para iniciar sesión
    const loginUser = async (values) => {
        const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
        const user = userCredential.user;
        const loggedUser = {
            logged: true,
            email: user.email,
            uid: user.uid
        };
        setUser(loggedUser);
        saveUserToLocalStorage(loggedUser);
    };

    // Función para iniciar sesión con Google
    const googleLogin = async () => {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const loggedUser = {
            logged: true,
            email: user.email,
            uid: user.uid
        };
        setUser(loggedUser);
        saveUserToLocalStorage(loggedUser);
    };

    // Función para cerrar sesión
    const logout = async () => {
        await signOut(auth);
        setUser({
            logged: false,
            email: null,
            uid: null
        });
        removeUserFromLocalStorage();
        router.push('/'); // Redirigir al home después de cerrar sesión
    };

    // Efecto para verificar si hay un usuario autenticado en localStorage
    useEffect(() => {
        const storedUser = getUserFromLocalStorage();
        if (storedUser.logged) {
            setUser(storedUser);
        }

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, "roles", user.uid);
                const userDoc = await getDoc(docRef);

                if (userDoc.data()?.rol === 'admin') {
                    const loggedUser = {
                        logged: true,
                        email: user.email,
                        uid: user.uid,
                    };
                    setUser(loggedUser);
                    saveUserToLocalStorage(loggedUser);
                } else {
                    router.push('/unauthorized');
                    logout();
                }
            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                });
                removeUserFromLocalStorage();
            }
        });

        return () => unsubscribe();
    }, [router]);

    // Renderizando el contexto
    return (
        <AuthContext.Provider value={{ user, signup, loginUser, googleLogin, logout }}>
            {children}
        </AuthContext.Provider>
    );
};