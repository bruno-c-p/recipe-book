import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAueBCFmm668QISdnCdCtNw1xw_9Xp924s",
    authDomain: "recipe-book-site-8d28f.firebaseapp.com",
    projectId: "recipe-book-site-8d28f",
    storageBucket: "recipe-book-site-8d28f.appspot.com",
    messagingSenderId: "863714396396",
    appId: "1:863714396396:web:416200a6d60f59cc0b7dc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const database = getFirestore(app);

export { database };