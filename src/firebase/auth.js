import { createUserWithEmailAndPassword } from './exports.js';
import { auth } from './config.js';

export function signUp(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log('caiu no then');
      const user = userCredential.user;
      console.log(user, 'Criou a conta');
      // ...
    })
    .catch((error) => {
      console.log('caiu no catch');
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, ':', errorMessage);
      // ..
    });
}
