import {
  auth,
  signIn,
} from '../firebase/auth.js';

import {
  firebaseErrors,
  validateRegister,
} from '../errors.js';

import { redirect } from '../redirect.js';

import { updateProfile } from '../firebase/exports.js';

// CRIAÇÃO FORM DE REGISTRO
export default () => {
  const container = document.createElement('div');
  container.classList.add('set');
  const containerSignUp = `
  <div class= "box-container">
    <picture><img class= "logo" src= "img/logo.png" alt= "logo site"></picture>
      <div class= "register">
        <input type= "text" placeholder= "Nome de usuário" id="user" class="input">
        <input type= "email" placeholder= "Email" id="email" class="input" required>
        <input type= "password" placeholder= "Senha" id="pwd" class="input" required>
        <span class="error"></span>
        <button type= "button" id="btn-register" class="input">Cadastre-se</button>
      </div>
    <div class= "login">
      <p class= "">Já possui cadastro?</p>
      <a href= "#"> Acesse sua conta.</a>
    </div>
    <footer class= "footer">&copy; Developed by: Marjorie Santos e Tamyres França.</footer>
  </div>`;
  container.innerHTML = containerSignUp;

  const btn = container.querySelector('#btn-register');
  const user = container.querySelector('#user');
  const email = container.querySelector('#email');
  const password = container.querySelector('#pwd');
  const messageError = container.querySelector('.error');

  btn.addEventListener('click', (event) => {
    event.preventDefault();
    const valid = validateRegister(user.value, email.value, password.value);
    if (valid === '') {
      signIn(email.value, password.value, user.value)
        .then(() => updateProfile(auth.currentUser, {
          displayName: user.value,
        }))
        .then(() => {
          redirect('#login');
        })
        .catch((error) => {
          const errorFirebase = firebaseErrors(error.code);
          messageError.innerHTML = errorFirebase;
        });
    } else {
      messageError.innerHTML = valid;
    }
  });

  return container;
};
