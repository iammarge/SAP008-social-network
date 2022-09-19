import { initializeApp } from './lib/firebase-app.js';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyDHNAOi7qzGsQXf9bYvdqmeu11Idr1wKuI',
  authDomain: 'social-network-3304b.firebaseapp.com',
  projectId: 'social-network-3304b',
  storageBucket: 'social-network-3304b.appspot.com',
  messagingSenderId: '619827666495',
  appId: '1:619827666495:web:c5640a51241f9c636c228a',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);