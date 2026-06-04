// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeAuth, getReactNativePersistence} from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcholIAMuwOUpN1KB-ccdgOc340DlFrBc",
  authDomain: "expense-tracker-c0128.firebaseapp.com",
  projectId: "expense-tracker-c0128",
  storageBucket: "expense-tracker-c0128.firebasestorage.app",
  messagingSenderId: "225752280405",
  appId: "1:225752280405:web:856f6eb4588dd96ee353dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export const firestore = getFirestore(app);
