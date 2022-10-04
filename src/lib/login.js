// CRIAÇÃO FORM DE LOGIN
export default () => {
  const containerLogin = document.createElement('div');
  containerLogin.classList.add('set-login');
  const templateLogin = `
    <div class= "box-container">
      <picture><img class= "logo" src= "img/logo.png" alt= "logo site"</picture>
      <form action="" id= "formLogin" class= "boxSignUp">
        <div class= "register">
          <input type= "email" placeholder= "Email" id="email" class="input">
          <input type= "password" placeholder= "Senha" id="pwd" class="input">
          <button type= "submit" id="btn-register" class="input">Login</button>
        </div>
      </form> 
      <a href= "">
        <img class= "google" src= "img/googlelogo.png" alt= "logo Google"> Registre-se com o Google.
      </a>
      <p class= "">Não possui cadastro?</p>
      <a href= "#register"> Registre-se</a>
      <footer> Developed by: Marjorie Santos e Tamyres França.</footer>
    </div>`;
  containerLogin.innerHTML = templateLogin;

  const init = () => {
    window.addEventListener('hashchange', () => console.log(window.location.hash));
  };

  window.addEventListener('load', () => {
    init();
  });
  return templateLogin;
};
