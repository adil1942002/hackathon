
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOHYkG5ZBUwnWnv0_L713iCvX3ophkn4g",
    authDomain: "hakhthon.firebaseapp.com",
    databaseURL: "https://hakhthon-default-rtdb.firebaseio.com",
    projectId: "hakhthon",
    storageBucket: "hakhthon.appspot.com",
    messagingSenderId: "177052538829",
    appId: "1:177052538829:web:e9b29b906c793638bc5684",
    measurementId: "G-HFGZFX6646"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);