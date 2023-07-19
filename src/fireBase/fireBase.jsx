import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBgFbuCjDsil71nlonix6EYQ1jJ3IW2EUk",
  authDomain: "fb-carrito.firebaseapp.com",
  projectId: "fb-carrito",
  storageBucket: "fb-carrito.appspot.com",
  messagingSenderId: "981604116065",
  appId: "1:981604116065:web:cf51b6aace4d831efaac20"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);