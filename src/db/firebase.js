// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCC9_-hY_YOaCPch_1zMobbtqQoC7leesc",

  authDomain: "netflix-clone-38799.firebaseapp.com",

  projectId: "netflix-clone-38799",

  storageBucket: "netflix-clone-38799.appspot.com",

  messagingSenderId: "838293376582",

  appId: "1:838293376582:web:bf730c04fcef93862fc447",

  measurementId: "G-CV4Y7M6ZCF",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new FacebookAuthProvider();

export { provider, auth };
export default db;
