// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcsl3Izt6CIkoRuD26iYYTSdUr0pVQv68",
  authDomain: "login-4c411.firebaseapp.com",
  databaseURL: "https://login-4c411.firebaseio.com",
  projectId: "login-4c411",
  storageBucket: "login-4c411.firebasestorage.app",
  messagingSenderId: "974771882897",
  appId: "1:974771882897:web:0809f99861838d8e73a830",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database, set, ref, onValue };
