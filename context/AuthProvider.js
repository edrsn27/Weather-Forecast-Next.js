import { createContext, useContext, useState, useEffect } from "react";
// get auth token from local storage
import { auth } from "../firebase-config";
// initialize github auth provider
import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// set github auth provider
const provider = new GithubAuthProvider();
// create context
const AuthContext = createContext();
// export context
export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // function for sign in with github
  const signin = () => {
    return signInWithPopup(auth, provider);
  };
  // function for sign out
  const signout = () => {
    return signOut(auth, provider);
  };

  useEffect(() => {
    // check if user is signed in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdTokenResult().then((idTokenResult) => {
          user.admin = idTokenResult.claims.admin;
        });
      }
      // set current user
      setCurrentUser(user);
      setLoading(false);
    
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    signin,
    signout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
