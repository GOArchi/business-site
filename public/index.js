// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBENhOJKnrGjeXb3llgg5-Pf5iuHG-SCTg",
  authDomain: "go-architecture.firebaseapp.com",
  projectId: "go-architecture",
  storageBucket: "go-architecture.appspot.com",
  messagingSenderId: "2299234279",
  appId: "1:2299234279:web:482ea2892275e541865f42",
  measurementId: "G-XBK847EPVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);