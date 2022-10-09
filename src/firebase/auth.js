import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from './exports.js';
import { auth } from './config.js';

export function signUp(email, password) {
  return  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log('caiu no then');
      const user = userCredential.user;
      console.log(user, 'Criou a conta');
      // ...
    })
    // .catch((error) => {
    //   console.log('caiu no catch');
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.log(errorCode, ':', errorMessage);
    //   // ..
    // });   
}
export function signIn(email, password){
return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log('entrou no signIn')
    // ...
  })
  // .catch((error) => {
  //   console.log('caiu no catch singIn')
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // });
}

export function singInWithGoogle(){  
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }