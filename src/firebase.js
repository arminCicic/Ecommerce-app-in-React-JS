// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLmCkxEV_w_ezPMr9T6HDnP9ZW6BUABjk",
  authDomain: "shopping-cart-f9390.firebaseapp.com",
  databaseURL: "https://shopping-cart-f9390-default-rtdb.firebaseio.com",
  projectId: "shopping-cart-f9390",
  storageBucket: "shopping-cart-f9390.appspot.com",
  messagingSenderId: "573997130563",
  appId: "1:573997130563:web:25d19ac49040480762c5f6",
  measurementId: "G-HLXVTKKXB5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();

export const auth = getAuth(app);
