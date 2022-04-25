
import { firebaseConfig } from "./firebase-config";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, where, addDoc } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (userDetail) => {
  try {
    await signInWithEmailAndPassword(auth, userDetail.email, userDetail.password);
    alert("Successfully Logged In");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (userDetail) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, userDetail.email, userDetail.password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      firstName: userDetail.firstname,
      lastName: userDetail.lastname,
      authProvider: "local",
      email: userDetail.email,
    });
    alert("Success!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
