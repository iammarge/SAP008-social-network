import { collection, addDoc, getDocs } from './exports.js';
import { auth, db } from './config.js';

export async function createPost(textPost) {
  try {
    const docRef = await addDoc(collection(db, 'textPost'), {
      text: textPost,
      emailUser: auth.currentUser.email,
      user: auth.currentUser.displayName,
      data: new Date(),
      uidUser: auth.currentUser.uid,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function readPost() {
  try {
    const listPost = [];
    const querySnapshot = await getDocs(collection(db, 'textPost'));
    querySnapshot.forEach((doc) => {
      listPost.push(doc.data());
    });
    return listPost;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
