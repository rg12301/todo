import firebase from "firebase";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcHFfCcmeafD1ac1BQO2YoQoEJglPuJBU",
  authDomain: "todo-app-react2.firebaseapp.com",
  projectId: "todo-app-react2",
  storageBucket: "todo-app-react2.appspot.com",
  messagingSenderId: "381902660614",
  appId: "1:381902660614:web:28d00ac117e0cc1df30f87",
  measurementId: "G-2D51JGVYTH",
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const firestore = firebase.firestore;

export default firebase;
