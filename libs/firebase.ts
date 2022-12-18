// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMZPN7yOhOMbWfyOsGj-vb6Y-IszG9C2o",
  authDomain: "database-common-5ab2b.firebaseapp.com",
  projectId: "database-common-5ab2b",
  storageBucket: "database-common-5ab2b.appspot.com",
  messagingSenderId: "439237698876",
  appId: "1:439237698876:web:972a79f127a8ad8c212a39",
  measurementId: "G-4RTD8M8NPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);