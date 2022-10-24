import { createPost, readPost } from '../firebase/firestore.js';

export default () => {
  const body = document.body;
  body.classList.remove('login-page');
  const containerFeed = document.createElement('div');
  containerFeed.classList.add('set-feed');
  const templateFeed = `
    <div class=div-feed>
      <nav class="nav-header">
        <img class="logo-feed" src="img/logo.png" alt="logo Google">
        <button type="submit" id="btn-about-us" class="button-nav">Sobre Nós</button>
        <button type="submit" id="btn-profile" class="button-nav">Profile</button>

        <div id="buscar"></div>
          <input type="text" class="search-for" placeholder="Buscar..." />
          <img src="img/lupa.png" id="btn-search" alt="Buscar" />
        </div>
      </nav>
      <section class="section-message">      
        <textarea id="message" placeholder="Escreva sua publicação aqui..."></textarea>  
        <div class="div-publish">    
         <p id=error-msg class=error-msg>...</p>
         <button type="submit" id="publish" class="btn-publish">Publicar</button>  
        </div>
      </section>
      <div>
       <p id="text-publish"> Carregando... </p>
      </div> 
      <footer> Developed by: Marjorie Santos e Tamyres França.</footer>
    </div>  
`;
  containerFeed.innerHTML = templateFeed;

  const textPost = containerFeed.querySelector("#message");
  const textPublish = containerFeed.querySelector("#text-publish");
  const btnPublish = containerFeed.querySelector("#publish");

  btnPublish.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("botão publicar ok");
    createPost(textPost.value);
    readAndWritePost(textPublish);
  })
  readAndWritePost(textPublish);
  return containerFeed;
};

async function readAndWritePost(textPublish) {
  const listPost = await readPost()
  let templatePost = "<ul>"
  listPost.forEach(post => {
    templatePost += "<li>" + post.text + "</li>"
  });
  templatePost += "</ul>"
  textPublish.innerHTML = templatePost
}

