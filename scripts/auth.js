import firebase from "./firebase.js";
// import setupGuides from "./index.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import setupGuides from "./index.js";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebase);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // console.log("User logged in:", user);
    setupGuides();
  } else {
    // console.log("User logged out");
  }
});

const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const modal = document.querySelector("#modal-signup");
      M.Modal.getInstance(modal).close();
      signupForm.reset();
    }
  );
});

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const modal = document.querySelector("#modal-login");
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  signOut(auth);
});
