// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPlf2cvkOI5MeKeFwEz7v_r7M8dJr-5qk",
  authDomain: "my-portfolio-da298.firebaseapp.com",
  databaseURL: "https://my-portfolio-da298-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-da298",
  storageBucket: "my-portfolio-da298.appspot.com",
  messagingSenderId: "693623705606",
  appId: "1:693623705606:web:9f7d0719f223bd1fc03387",
  measurementId: "G-BF9M7LD1RZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);