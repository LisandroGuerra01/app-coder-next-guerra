// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwOdyRgydLy5EiqZZ_YTHWDeXm5VPxHiQ",
    authDomain: "groidegaming-app.firebaseapp.com",
    projectId: "groidegaming-app",
    storageBucket: "groidegaming-app.appspot.com",
    messagingSenderId: "610871316344",
    appId: "1:610871316344:web:267b473659eb823d95c28d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);