import { collection, addDoc, getDocs } from './exports.js';
import { db } from './config.js';

export async function createPost(textPost){ 
  try {
  const docRef = await addDoc(collection(db, "textPost"), {
    text: textPost    
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}}

export async function readPost(){ 
  try {
    const listPost = [];
    const querySnapshot = await getDocs(collection(db, "textPost"));
    querySnapshot.forEach((doc) => {
     listPost.push(doc.data());  
    })
    return listPost;
} catch (e) {
  console.error("Error adding document: ", e);
}}

