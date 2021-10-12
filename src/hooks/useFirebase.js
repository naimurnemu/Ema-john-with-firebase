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
  const [error, setError] = useState({});

  // firebase auth
  const auth = getAuth();

  // google login Method
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => setError(error.message));
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
    error,
    logOut,
    signInWithGoogle,
  };
};

export default useFirebase;
