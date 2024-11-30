import React, { createContext, useContext, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.init';


export const AuthContext = createContext(null);

export const useFirebaseAuth = ()=>{
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {

   const [user, setUser]  = useState(null);
   const [loading, setLoading] = useState(true);


// _______create user

   const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(true) 
        const result = userCredential.user;
        console.log(result);
        return result;
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // Handle specific error cases
        switch (errorCode) {
          case 'auth/email-already-in-use':
            return 'This email is already in use.';
          case 'auth/invalid-email':
            return 'The email address is not valid.';
          case 'auth/weak-password':
            return 'The password is too weak.';
          // Add more cases as needed
          default:
            return errorMessage; // Return the default error message
        }
      });
   }


   const signInUser = (email , password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorMessage;
    });
   }





const firebaseInfo = {
    user,
    loading,
    createUser,
    signInUser

}

  return (
   <AuthContext.Provider value={firebaseInfo}>
    {children}
   </AuthContext.Provider>

  )
}

export default AuthProvider