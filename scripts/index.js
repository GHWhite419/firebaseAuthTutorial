import firebase from "./firebase.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

const db = getFirestore(firebase);

const guideList = document.querySelector(".guides");

// setup materialize components
document.addEventListener("DOMContentLoaded", function () {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  var items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});

const querySnapshot = await getDocs(collection(db, "guides"));

const setupGuides = () => {
  let html = "";
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    const guideData = doc.data();
    const li = `
    <li>
    <div class="collapsible-header grey lighten-4">${guideData.title}</div>
    <div class="collapsible-body white">${guideData.content}</div>
    </li>
    `;
    html += li;
  });
  guideList.innerHTML = html;
};

export default setupGuides;