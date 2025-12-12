// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeUdN7Ai60_w6unU0vPJ94Cam77zViTvc",
  authDomain: "kirei-portofolio.firebaseapp.com",
  projectId: "kirei-portofolio",
  storageBucket: "kirei-portofolio.firebasestorage.app",
  messagingSenderId: "868305611670",
  appId: "1:868305611670:web:01ec4eb6ab670d1542cbb7",
  measurementId: "G-XWC5MZKW4J"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
