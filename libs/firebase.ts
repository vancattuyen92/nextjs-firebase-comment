// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAwaeq2upzkVoxzEBFuuOzans_vlysOtUk',
  authDomain: 'fullstack-react-2435b.firebaseapp.com',
  projectId: 'fullstack-react-2435b',
  storageBucket: 'fullstack-react-2435b.appspot.com',
  messagingSenderId: '867443711974',
  appId: '1:867443711974:web:94371bab143fdcc14f4027',
  measurementId: 'G-4X1RDEZ7E4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);