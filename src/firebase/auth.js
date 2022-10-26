import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from './exports.js';

import { app } from './config.js';

export const auth = getAuth(app);
const google = new GoogleAuthProvider(app);

export async function signIn(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export async function signInGoogle() {
  return signInWithPopup(auth, google);
}

export function getUser() {
  return auth.currentUser;
}

export function logout() {
  return signOut(auth);
}
