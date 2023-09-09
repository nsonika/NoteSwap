// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9JV9BsImNOQlxGwIxC3-n04m-pjMijO0",
  authDomain: "blogr-8d7a3.firebaseapp.com",
  projectId: "blogr-8d7a3",
  storageBucket: "blogr-8d7a3.appspot.com",
  messagingSenderId: "961537741059",
  appId: "1:961537741059:web:414ab045cc61e5a86e9936"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();