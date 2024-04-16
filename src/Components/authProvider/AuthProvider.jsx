

import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebaseConfig";


export const AuthContext = createContext(null);


//Social Auth Provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twiterProvider = new TwitterAuthProvider();




const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState([])


    //createUser
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    //sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // GitHub login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }
    //Twitter login
    const twitterLogin = () => {
        return signInWithPopup(auth, twiterProvider)
    }

    // logout
    const logOut = () => {
        setCurrentUser(null)
        return signOut(auth)

    }



    //observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            setCurrentUser(user)

        });
    }, [])

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        twitterLogin,
        logOut,
        currentUser,
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;