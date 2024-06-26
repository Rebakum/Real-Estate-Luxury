

import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebaseConfig";


export const AuthContext = createContext(null);


//Social Auth Provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twiterProvider = new TwitterAuthProvider();




const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    console.log(currentUser)
    const [loading, setloading] = useState(true);

    console.log(loading)
    //createUser
    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };
     //update User profile
     const updateUserProfile=(name, photo)=>{
      return  updateProfile(auth.currentUser, {
            displayName: name,
             photoURL:photo
          })
                  
     }
     

    //sign in user
    const signInUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Google login
    const googleLogin = () => {
        setloading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // GitHub login
    const githubLogin = () => {
        setloading(true)
        return signInWithPopup(auth, githubProvider)
    }
    //Twitter login
    const twitterLogin = () => {
        setloading(true)
        return signInWithPopup(auth, twiterProvider)
    }

    // logout
    const logOut = () => {
        setCurrentUser(null)
        return signOut(auth)

    }



    //observer
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                
                setCurrentUser(user); 
                setloading(false);
            }

        });
        return () => unsubcribe()
    }, [])

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        twitterLogin,
        logOut,
        currentUser,
        loading,
        updateUserProfile,
        setCurrentUser
        
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;