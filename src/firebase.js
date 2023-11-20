// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBqc4IHWA3jrMqV3TMdPiicLFRBat3IjmU",
    authDomain: "dating-app-5b4dd.firebaseapp.com",
    projectId: "dating-app-5b4dd",
    storageBucket: "dating-app-5b4dd.appspot.com",
    messagingSenderId: "324728981815",
    appId: "1:324728981815:web:dcdccceedb2bfa130432b2",
    measurementId: "G-9682QE2F0S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();
  
  export default database;