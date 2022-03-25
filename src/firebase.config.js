// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUAWaNCaZXIVy2bRqqnI1dOmWCJOuE1RQ",
    authDomain: "house-market-place-app-5fad7.firebaseapp.com",
    projectId: "house-market-place-app-5fad7",
    storageBucket: "house-market-place-app-5fad7.appspot.com",
    messagingSenderId: "510486881277",
    appId: "1:510486881277:web:687a374a5c262d570baf94"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()