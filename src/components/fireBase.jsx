import firebase from "firebase"
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3Uq4cAe8Xj2oErmRukoYd9EYPJ73Y-oA",
  authDomain: "chat-app-c4052.firebaseapp.com",
  projectId: "chat-app-c4052",
  storageBucket: "chat-app-c4052.appspot.com",
  messagingSenderId: "812561862681",
  appId: "1:812561862681:web:25df2b7348e1a577935a88"
};

//this special line of code connects everythings
const firebaseApp = firebase.initializeApp(firebaseConfig);

//this is for database connect
const db = firebaseApp.firestore();

export default db;
