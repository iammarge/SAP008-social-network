import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from './exports.js';

import {
  auth,
  db,
} from './config.js';

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
  const post = doc(db, 'textPost', id);
  return updateDoc(post, {
    likes: arrayUnion(auth.currentUser.uid),
  });
}

export function dislike(id) {
  const post = doc(db, 'textPost', id);
  return updateDoc(post, {
    likes: arrayRemove(auth.currentUser.uid),
  });
}

export const editPost = async (id, text) => {
  const post = doc(db, 'textPost', id);

  return updateDoc(post, {
    text,
  });
};
