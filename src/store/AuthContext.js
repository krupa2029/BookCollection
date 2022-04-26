import React, { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const db = getFirestore(app);
  let navigate = useNavigate();

  const logInWithEmailAndPassword = async (userDetail) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        userDetail.email,
        userDetail.password
      );
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async (userDetail) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        userDetail.email,
        userDetail.password
      );
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        firstName: userDetail.firstname,
        lastName: userDetail.lastname,
        authProvider: "local",
        email: userDetail.email,
      });
      alert("Success!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  function getUser() {
    return auth.currentUser;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);
  //   const sendPasswordReset = async (email) => {
  //     try {
  //       await sendPasswordResetEmail(auth, email);
  //       alert("Password reset link sent!");
  //     } catch (err) {
  //       console.error(err);
  //       alert(err.message);
  //     }
  //   };

  const logout = () => {
    signOut(auth);
  };

  const contextValue = {
    currentUser,
    getUser,
    db: db,
    login: logInWithEmailAndPassword,
    register: registerWithEmailAndPassword,
    logout: logout,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
