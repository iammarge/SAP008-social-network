import { createPost, readPost } from '../firebase/firestore.js';

export default () => {
    const containerFeed = document.createElement('div');
    containerFeed.classList.add('set-feed');
    const templateFeed = `
    <div class=div-feed>
      <nav class="nav-header">
        <img class="logo-feed" src="img/logo.png" alt="logo Google">

        <div id="buscar"></div>
          <input type="text" class="search-for" placeholder="Buscar..." />
          <img src="img/lupa.png" id="btn-search" alt="Buscar" />
        </div>
      </nav>
      <div>
      <form class="form-message">
        <textarea id="message" placeholder="Escreva sua publicação aqui..."></textarea>
        <button type="submit" id="publish" class="btn-publish">Publicar</button>
      </form>
      </div>
      <p id="text-publish"> Carregando... </p>
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
    templatePost += "<li>"+ post.text +"</li>"
    });
    templatePost += "</ul>"
    textPublish.innerHTML = templatePost
    }
 
