// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0qOravjwZxi-CWTrIkUwxww0Ji3RcaL4",
  authDomain: "stackoverflow-clone-5564c.firebaseapp.com",
  projectId: "stackoverflow-clone-5564c",
  storageBucket: "stackoverflow-clone-5564c.appspot.com",
  messagingSenderId: "195570477506",
  appId: "1:195570477506:web:917814d050f7b8ed22ce5b",
  measurementId: "G-FDSSSPE8NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
