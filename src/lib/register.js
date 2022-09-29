// CRIAÇÃO FORM DE REGISTRO
export default () => {
  const container = document.createElement('div');
  container.classList.add('set');
  const signUp = `
  <div class= "box-container">
    <picture><img class= "logo" src= "img/logo.png" alt= "logo site"</picture>
    <form action="" id= "formLogin" class= "boxSignUp">
      <div class= "register">
        <input type= "text" placeholder= "Nome e sobrenome" id="last-and-name" class="input">
        <input type= "text" placeholder= "Nome de usuário" id="user" class="input">
        <input type= "email" placeholder= "Email" id="email" class="input">
        <input type= "password" placeholder= "Senha" id="pwd" class="input">
        <button type= "submit" id="btn-register" class="input">Cadastre-se</button>
      </div>
    </form> 
    <a href= "" class="register-google">
      <img class= "google" src= "img/googlelogo.png" alt= "logo Google"> Registre-se com o Google.
    </a>
    <div class= "login">
      <p class= "">Já possui cadastro?</p>
      <a href= ""> Acesse sua conta.</a>
    </div>
    <footer class= "footer">&copy; Developed by:Bruna Nunes, Marjorie Santos e Tamyres França.</footer>
  </div>`;
  container.innerHTML = signUp;
  return signUp;
};

// const signUp = () => {
//   const signUpTemplate = `
//   <div id= "initial" class= "box">
//     <picture><img class= "logo" src= "img/logo.png"></picture>
//     <form id= "formLogin" class= "boxSignUp">
//       <div class= "register">
//         <input type= "text" placeholder= "Nome e sobrenome" id="name" class="lastName">
//       </div>
//       <div class= "register">
//         <input type= "text" placeholder= "Nome de usuário" id="user" class="userName">
//       </div>
//       <div class= "register">
//         <input type= "email" placeholder= "Email" id="emailLogin" class="email">
//       </div>
//       <div class= "register">
//         <input type= "password" placeholder= "Senha" id="senhaLogin" class="senha">
//       </div>
//       <div class= "buttonIn">
//         <button type= "submit" id="btnLogin" class="login">Login</button>
//       </div>
//       <p>Esqueceu a senha?</p>
//    </form>
//   </div>`;
//   return signUpTemplate;
// };

// export default signUp;
