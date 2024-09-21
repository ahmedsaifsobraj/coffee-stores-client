// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD4TgMKuUx19kX-F6JUZpYS2uaxh8h7OI",
  authDomain: "coffee-store-3ed9e.firebaseapp.com",
  projectId: "coffee-store-3ed9e",
  storageBucket: "coffee-store-3ed9e.appspot.com",
  messagingSenderId: "997600651658",
  appId: "1:997600651658:web:3174100cf5201994280073"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;