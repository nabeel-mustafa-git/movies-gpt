import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebase_api_key, firebase_appid, firebase_message_sender_id } from "./keys";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: firebase_api_key,
  authDomain: "movai-project.firebaseapp.com",
  projectId: "movai-project",
  storageBucket: "movai-project.appspot.com",
  messagingSenderId: firebase_message_sender_id,
  appId: firebase_appid,
  measurementId: "G-HYHPRXXZ7Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
