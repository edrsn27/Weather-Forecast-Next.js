import { createContext, useContext, useState, useEffect } from "react";
// get auth token from local storage
import { auth } from "../firebase-config";
// initialize github auth provider
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// set github auth provider
const githubProvider = new GithubAuthProvider();
// set google auth provider
const googleProvider = new GoogleAuthProvider();
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
  const signin = (provider) => {
    if (provider === "github") {
      return signInWithPopup(auth, githubProvider);
    }
    if (provider === "google") {
      return signInWithPopup(auth, googleProvider);
    }
  };
  // function for sign out
  const signout = (provider) => {
    if (provider === "github.com") {
      return signOut(auth, githubProvider);
    }
    if (provider === "google.com") {
      return signOut(auth, googleProvider);
    }
  };

  useEffect(() => {
    // check if user is signed in
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user && user.providerData[0].providerId == "github.com") {
        const res = await fetch(
          `https://api.github.com/user/${user.providerData[0].uid}`
        );
        const data = await res.json();
        user.gitHubUrl = data.html_url;
      }
      // set current user
      setCurrentUser(user);
      console.log(user);
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
