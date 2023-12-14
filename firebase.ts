// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB4e-PhdAAlBRnRiW5zYLFwzi-1Lxh-qg",
  authDomain: "dropbox-next.firebaseapp.com",
  projectId: "dropbox-next",
  storageBucket: "dropbox-next.appspot.com",
  messagingSenderId: "501894640508",
  appId: "1:501894640508:web:3d25ff63ac44e12c556af9",
  measurementId: "G-GBPBCV58KN",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export {db, storage}