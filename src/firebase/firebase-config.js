// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
// eslint-disable-next-line import/no-unresolved
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDHNAOi7qzGsQXf9bYvdqmeu11Idr1wKuI',
  authDomain: 'social-network-3304b.firebaseapp.com',
  projectId: 'social-network-3304b',
  storageBucket: 'social-network-3304b.appspot.com',
  messagingSenderId: '619827666495',
  appId: '1:619827666495:web:c5640a51241f9c636c228a',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
