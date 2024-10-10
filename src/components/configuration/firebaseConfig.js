// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";
// import {RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA9Qx1hqLDNKzJz_t3lLAWwqAyq-cgEi7I",
  authDomain: "health2-e2d33.firebaseapp.com",
  databaseURL: "https://health2-e2d33-default-rtdb.firebaseio.com",
  projectId: "health2-e2d33",
  storageBucket: "health2-e2d33.appspot.com",
  messagingSenderId: "595369257323",
  appId: "1:595369257323:web:5b2e157d0b9a8fe5bbc42e",
  measurementId: "G-GYT22WPKMT"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
auth.languageCode = 'in';

export { db, auth };
