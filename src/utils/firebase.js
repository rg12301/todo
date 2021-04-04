import firebase from "firebase";

import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiEIuD3TNivDojRowWoiBGCzDcpCPE8bY",
  authDomain: "todoapp040.firebaseapp.com",
  projectId: "todoapp040",
  storageBucket: "todoapp040.appspot.com",
  messagingSenderId: "238553409562",
  appId: "1:238553409562:web:0cf67bf7c3ab0e5cb489a3",
  measurementId: "G-W9271ZDZ01",
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const firestore = firebase.firestore;

export default firebase;
