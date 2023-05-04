// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWvTLUTzlUyEmzCSeny1uJaVuaNQ3HGwY",
  authDomain: "fir-authtutorial-bd3ac.firebaseapp.com",
  projectId: "fir-authtutorial-bd3ac",
  appId: "1:45271606998:web:511ce232876dd12de04b77",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service

export default firebase;