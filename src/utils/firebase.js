// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsNap2QBnNNDKXjHvNJsfwZEoYiL5P13Q",
  authDomain: "netflixgpt-4ba55.firebaseapp.com",
  projectId: "netflixgpt-4ba55",
  storageBucket: "netflixgpt-4ba55.appspot.com",
  messagingSenderId: "811962906058",
  appId: "1:811962906058:web:c648fc672327793ddb4b33",
  measurementId: "G-ZPKG6LQXE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
