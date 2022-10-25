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

        <div id="buscar">
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
      <section id="section-posts" class="posts">
      </section> 
      <footer> Developed by: Marjorie Santos e Tamyres França.</footer>
    </div>  
`;
  containerFeed.innerHTML = templateFeed;

  const textPost = containerFeed.querySelector('#message');
  const textPublish = containerFeed.querySelector('#section-posts');
  const btnPublish = containerFeed.querySelector('#publish');
  const templatePublish = (post) => {
    const containerPost = document.createElement('div');
    containerPost.innerHTML = `
      <div class="post-feed">
        <p class="user-name">{nome usuário}</p>
        <div class="post-div">
          <p class="post-text" contenteditable="false">${post.text}</p>
        </div>
      </div>  
      `;
    return containerPost;
  };

  const readAndWritePost = async () => {
    const listPost = await readPost();
    textPublish.innerHTML = '';
    listPost.forEach((post) => {
      textPublish.appendChild(templatePublish(post));
    });
  };

  btnPublish.addEventListener('click', (e) => {
    e.preventDefault();
    createPost(textPost.value);
    readAndWritePost();
  });
  readAndWritePost();

  return containerFeed;
};
