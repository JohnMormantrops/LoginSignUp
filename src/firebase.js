import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDuEQ8P9mUkdZhilGtIvMWExFh6-cB2pCo",
  authDomain: "authentication-38c19.firebaseapp.com",
  projectId: "authentication-38c19",
  storageBucket: "authentication-38c19.appspot.com",
  messagingSenderId: "816903384378",
  appId: "1:816903384378:web:da8f2b286904aaf01bb403",
  measurementId: "G-YD6NTZNYDS"
});

export const auth = app.auth();
export default app;
