// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

export function signUp(email, password) {
  const auth = getAuth();
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
