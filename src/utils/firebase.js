import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPTHpDrlwawLl-ptmj9NHOvTo4csbEs4k",
  authDomain: "movai-project.firebaseapp.com",
  projectId: "movai-project",
  storageBucket: "movai-project.appspot.com",
  messagingSenderId: "956078031123",
  appId: "1:956078031123:web:f3c9e97f66e9cc4955dae6",
  measurementId: "G-HYHPRXXZ7Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
