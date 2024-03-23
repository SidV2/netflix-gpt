// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ7yr38IPFQdnLIyRmHSm3yLSDe-cKIJM",
  authDomain: "netflix-gpt-3846a.firebaseapp.com",
  projectId: "netflix-gpt-3846a",
  storageBucket: "netflix-gpt-3846a.appspot.com",
  messagingSenderId: "748768834521",
  appId: "1:748768834521:web:275939f005ea5542a7dfc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export const auth = getAuth();