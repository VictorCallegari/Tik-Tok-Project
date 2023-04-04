import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA5gbYY4Ig_8-BlupE6B0hz5sJzOJGzLzY",
  authDomain: "tiktok---projetodev.firebaseapp.com",
  projectId: "tiktok---projetodev",
  storageBucket: "tiktok---projetodev.appspot.com",
  messagingSenderId: "653284708800",
  appId: "1:653284708800:web:5c811de0c46868e9e5f825"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;