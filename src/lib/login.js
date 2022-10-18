import {
  login,
  signInGoogle,
} from '../firebase/auth.js';

import {
  firebaseErrors,
  validateLogin,
} from '../errors.js';

import { redirect } from '../redirect.js';

// CRIAÇÃO FORM DE LOGIN
export default () => {
  const containerLogin = document.createElement('div');
  containerLogin.classList.add('set-login');
  const templateLogin = `
    <div class= "box-container">
      <picture><img class= "logo" src= "img/logo.png" alt= "logo site"</picture>
      <form action="" id= "formLogin" class= "boxSignUp">
        <div class= "register">
          <input type= "email" placeholder= "Email" id="email" class="input" required>
          <input type= "password" placeholder= "Senha" id="pwd" class="input" required>
          <span class="error"></span>
          <button type= "submit" id="btn-login" class="input">Login</button>
        </div>
      </form> 
      <a id="btn-google" href= "">
        <img class= "google" src= "img/googlelogo.png" alt= "logo Google"> Entre com o Google.
      </a>
      <p class= "">Não possui cadastro?</p>
      <a id="btn-register" href= "#register"> Registre-se</a>
      <footer> Developed by: Marjorie Santos e Tamyres França.</footer>
    </div>`;
  containerLogin.innerHTML = templateLogin;

  const emailLogin = containerLogin.querySelector('#email');
  const passwordLogin = containerLogin.querySelector('#pwd');
  const btnLogin = containerLogin.querySelector('#btn-login');
  const btnGoogle = containerLogin.querySelector('#btn-google');
  const btnRegister = containerLogin.querySelector('#btn-register');
  const messageError = containerLogin.querySelector('.error');

  btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    redirect('#register');
  });

  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const valid = validateLogin(emailLogin.value, passwordLogin.value);
    if (valid === '') {
      login(emailLogin.value, passwordLogin.value)
        .then(() => {
          containerLogin.innerHTML = '';
          redirect('#feed');
        })
        .catch((error) => {
          const errorFirebase = firebaseErrors(error.code);
          messageError.innerHTML = errorFirebase;
        });
    } else {
      messageError.innerHTML = valid;
    }
  });

  btnGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    signInGoogle().then(() => {
      redirect('#feed');
    })
      .catch((error) => error);
  });

  return containerLogin;
};
