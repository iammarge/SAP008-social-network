import { signUp } from '../firebase/auth.js';

// CRIAÇÃO FORM DE REGISTRO
export default () => {
  const container = document.createElement('div');
  container.classList.add('set');
  const containerSignUp = `
  <div class= "box-container">
    <picture><img class= "logo" src= "img/logo.png" alt= "logo site"></picture>
      <div class= "register">
        <input type= "email" placeholder= "Email" id="email" class="input">
        <input type= "password" placeholder= "Senha" id="pwd" class="input">
        <button type= "button" id="btn-register" class="input">Cadastre-se</button>
      </div>
    <a href= "#" class="register-google">
      <img class= "google" src= "img/googlelogo.png" alt= "logo Google"> Registre-se com o Google.
    </a>
    <div class= "login">
      <p class= "">Já possui cadastro?</p>
      <a href= "#"> Acesse sua conta.</a>
    </div>
    <footer class= "footer">&copy; Developed by: Marjorie Santos e Tamyres França.</footer>
  </div>`;
  container.innerHTML = containerSignUp;

  const btn = container.querySelector('#btn-register');
  const email = container.querySelector('#email');
  const password = container.querySelector('#pwd');

  const newUser = (e) => {
    e.preventDefault();
    return signUp(email.value, password.value);
  };

  btn.addEventListener('click', (e) => newUser(e));

  return container;
};

/* <input type= "text" placeholder= "Nome e sobrenome" id="last-and-name" class="input">
<input type= "text" placeholder= "Nome de usuário" id="user" class="input"> */
