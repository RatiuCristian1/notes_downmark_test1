
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCYO2Grb9vqc4iViIerkcYiZsAyhNLwZqI",
  authDomain: "react-markdown1.firebaseapp.com",
  projectId: "react-markdown1",
  storageBucket: "react-markdown1.appspot.com",
  messagingSenderId: "115853929773",
  appId: "1:115853929773:web:8a923299d3a2aa8673f7a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")