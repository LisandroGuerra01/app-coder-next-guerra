'use client'
import { db, auth, provider } from "@/firebase/config";
import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

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

    const router = useRouter();

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
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, "roles", user.uid);
                const userDoc = await getDoc(docRef);             

                if (userDoc.data()?.rol === 'admin') {
                    setUser({
                        logged: true,
                        email: user.email,
                        uid: user.uid,
                    });
                } else {
                    router.push('/unauthorized');
                    logout()
                }
            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                });
            }
        })
    }, [router]);



    // const resetPassword = (email) => {
    //     setLoading(true);
    //     return sendPasswordResetEmail(auth, email);
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

    //Renderizando el contexto
    return (
        <AuthContext.Provider value={{ user, signup, loginUser, googleLogin, logout }}>
            {children}
        </AuthContext.Provider>
    );
};