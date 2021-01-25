// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCTH5BLWKSc3W7th6mdixprdWQWF1OpSy8",
  authDomain: "clone-f2d59.firebaseapp.com",
  databaseURL: "https://clone-f2d59.firebaseio.com",
  projectId: "clone-f2d59",
  storageBucket: "clone-f2d59.appspot.com",
  messagingSenderId: "687841534136",
  appId: "1:687841534136:web:b100c7057d402491b7144d",
  measurementId: "G-78Y8R74CEB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
