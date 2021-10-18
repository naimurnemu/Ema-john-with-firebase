import { useEffect, useState } from "react";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

// initialize firebase api
initializeAuthentication();

// google provider
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  // state
  const [user, setUser] = useState({});
  // const [error, setError] = useState({});

  // firebase auth
  const auth = getAuth();

  // google login Method
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // logout method
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  // observe user state changes
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    logOut,
    signInWithGoogle,
  };
};

export default useFirebase;
