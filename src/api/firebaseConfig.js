// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0X2LnrdGexLNiQTaQ6qjSjGK7PNlsNRQ",
  authDomain: "project-js-de31e.firebaseapp.com",
  projectId: "project-js-de31e",
  storageBucket: "project-js-de31e.appspot.com",
  messagingSenderId: "1037999334339",
  appId: "1:1037999334339:web:cfc092c9983a5e807f9376",
  measurementId: "G-ZW7JSE8BY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const app2 = app;
export const auth = getAuth(app)