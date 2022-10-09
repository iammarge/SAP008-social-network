import { singInWithGoogle, signIn } from '../firebase/auth.js'

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
          <button type= "submit" id="btn-login" class="input">Login</button>
        </div>
      </form> 
      <a href= "">
        <img class= "google" src= "img/googlelogo.png" alt= "logo Google"> Registre-se com o Google.>
      </a>
      <p class= "">Não possui cadastro?</p>
      <a href= "#register"> Registre-se</a>
      <footer> Developed by: Marjorie Santos e Tamyres França.</footer>
    </div>`;
  containerLogin.innerHTML = templateLogin;

  const emailLogin = containerLogin.querySelector('#email');
  const passwordLogin = containerLogin.querySelector('#pwd')
  const btnLogin = containerLogin.querySelector('#btn-login');


  btnLogin.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log("btn-login OK")
    signIn(emailLogin.value, passwordLogin.value)
    .then(() => {
      console.log('caiu no then para feed')
      window.location.hash = '#feed'
    })    
    .catch((error) => {
      console.log('caiu no catch singIn')
      const errorCode = error.code;
      const errorMessage = error.message;
      })   
  })

  const btnGoogle = containerLogin.querySelector('.google');
  btnGoogle.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log("btn OK")
    singInWithGoogle()
    .then(() => {
      console.log('entrou no then login')
      window.location.hash = '#feed'
    })
  })
  return containerLogin;
};
