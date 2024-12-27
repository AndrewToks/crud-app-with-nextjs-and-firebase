// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH4JLJaIrEiaHeK_mxWljlofkFQzyXmso",
  authDomain: "blog-app-220c8.firebaseapp.com",
  projectId: "blog-app-220c8",
  storageBucket: "blog-app-220c8.firebasestorage.app",
  messagingSenderId: "640209681749",
  appId: "1:640209681749:web:a043a583aab6df5fa703dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {db,app}