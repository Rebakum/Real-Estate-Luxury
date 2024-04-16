// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxWWqWBOJ4LADFF2xYF_J01_aymN2y31w",
  authDomain: "real-state-luxury.firebaseapp.com",
  projectId: "real-state-luxury",
  storageBucket: "real-state-luxury.appspot.com",
  messagingSenderId: "875656709675",
  appId: "1:875656709675:web:9d9e626b4fbc95c1b50c6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;