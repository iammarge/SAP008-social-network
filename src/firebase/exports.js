export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js'; //eslint-disable-line

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'; //eslint-disable-line
// eslint-disable-next-line import/no-unresolved
export { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
