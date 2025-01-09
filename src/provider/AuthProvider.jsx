import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';






export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user
    const updateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl,
        })
    }

    // hold User
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])


    // login user by email
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut user
    const logOut = async () => {
        setLoading(true)
        return signOut(auth)
    }


    // singin with google

    const signInWithGoogle = async () => {
        const axiosPublic = useAxiosPublic();

        try {
            setLoading(true); // Set loading state to true

            // Trigger Google sign-in
            const result = await signInWithPopup(auth, googleProvider);

            // Get user information from the result
            const user = result.user;
            const email = user.email; // User's email
            const displayName = user.displayName; // User's display name
            const userInfo = {
                email: email,
                name: displayName,
            };

            // Save user to backend
            await axiosPublic.post('/users', userInfo);

            // Display success message with user info
            toast.success(`Logged in as ${displayName} (${email})`);

            // Redirect after successful sign-in

        } catch (error) {
            // Handle the error
            toast.error(error.message);
        } finally {
            setLoading(false); // Reset loading state
        }
    };


    const authInfo = {
        createUser,
        updateUserProfile,
        signInWithGoogle,
        signIn,
        setUser,
        logOut,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;