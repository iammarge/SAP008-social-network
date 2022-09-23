// CRIAÇÃO FORM DE LOGIN
const signUp = () => {
  const signUpTemplate = `
  <div id= "initial" class= "box"> 
   	<picture>
      <img class= "logo" src= "img/logo.png">
    </picture>
    <form id= "formLogin" class= "boxSignUp">
      <div class= "register">
        <input type= "text" placeholder= "Nome e sobrenome" id="name" class="lastName">
      </div>
      <div class= "register">
        <input type= "text" placeholder= "Nome de usuário" id="user" class="userName">
      </div>
      <div class= "register">
        <input type= "email" placeholder= "Email" id="emailLogin" class="email">
      </div>
      <div class= "register">
        <input type= "password" placeholder= "Senha" id="senhaLogin" class="senha">
      </div>
      <div class= "buttonIn">
        <button type= "submit" id="btnLogin" class="login">Login</button>
      </div>
      <p>Esqueceu a senha?</p>
   </form>
  </div>`;
  return signUpTemplate;
};

export default signUp;
