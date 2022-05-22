import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByU6hJxtXloJcKqEhsm9ynmLcyQ6O_EZM",
  authDomain: "chat-app-8d72c.firebaseapp.com",
  projectId: "chat-app-8d72c",
  storageBucket: "chat-app-8d72c.appspot.com",
  messagingSenderId: "134315567861",
  appId: "1:134315567861:web:6de535a807220206e9f3bc",
  measurementId: "G-7VWZJJDMMD"
  };

//this special line of code connects everythings
const firebaseApp = firebase.initializeApp(firebaseConfig);

//this is for database connect
const db = firebaseApp.firestore();

export default db;
