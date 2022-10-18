import { initializeApp, getFirestore } from './exports.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDHNAOi7qzGsQXf9bYvdqmeu11Idr1wKuI',
  authDomain: 'social-network-3304b.firebaseapp.com',
  projectId: 'social-network-3304b',
  storageBucket: 'social-network-3304b.appspot.com',
  messagingSenderId: '619827666495',
  appId: '1:619827666495:web:c5640a51241f9c636c228a',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
