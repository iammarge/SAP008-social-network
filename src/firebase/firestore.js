import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
} from './exports.js';

<<<<<<< HEAD
import { auth, db } from './config.js';
=======
import {
  auth,
  db,
} from './config.js';
>>>>>>> 5fe2acbaa273fd4eaad449e819eee6ec3cf287b3

export async function createPost(textPost) {
  try {
    const docRef = await addDoc(collection(db, 'textPost'), {
      text: textPost,
      emailUser: auth.currentUser.email,
      user: auth.currentUser.displayName,
      data: new Date(),
      uidUser: auth.currentUser.uid,
      likes: [],
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
    querySnapshot.forEach((docs) => {
      const post = docs.data();
      post.id = docs.id;
      listPost.push(post);
    });
    return listPost;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
  return readPost;
}

export function likes(id) {
<<<<<<< HEAD
  console.log(id);
=======
>>>>>>> 5fe2acbaa273fd4eaad449e819eee6ec3cf287b3
  const post = doc(db, 'textPost', id);
  return updateDoc(post, {
    likes: arrayUnion(auth.currentUser.uid),
  });
}
