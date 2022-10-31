<<<<<<< HEAD
import { getUser, logout } from '../firebase/auth.js';
import { redirect } from '../redirect.js';
import { createPost, readPost, likes } from '../firebase/firestore.js';
=======
import {
  getUser,
  logout,
} from '../firebase/auth.js';

import {
  createPost,
  readPost,
  likes,
} from '../firebase/firestore.js';

import { redirect } from '../redirect.js';
>>>>>>> 5fe2acbaa273fd4eaad449e819eee6ec3cf287b3

export default () => {
  const body = document.body;
  body.classList.remove('login-page');
  const containerFeed = document.createElement('div');
  containerFeed.classList.add('container-feed');
  const templateFeed = `
    <div class=div-feed>
      <nav class="nav-header">
        <img class="logo-feed" src="img/logo.png" alt="logo Google">
        <button type="submit" id="btn-about-us" class="button-nav">Sobre Nós</button>
        <button type="submit" id="btn-profile" class="button-nav">Profile</button>
<<<<<<< HEAD

        <div id="buscar">
          <input type="text" class="search-for" placeholder="Buscar..." />
          <img src="img/lupa.png" id="btn-search" alt="Buscar" />
        </div>
        <button id="btn-logout" class="btn-out">Sair</button>
=======
        <a id="btn-logout" class="button-sair">
          <img class="img-logout" src="img/logout.png" alt="Botão Sair">
        </a>
>>>>>>> 5fe2acbaa273fd4eaad449e819eee6ec3cf287b3
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
  const btnLogout = containerFeed.querySelector('#btn-logout');

  const templatePublish = (post) => {
    const user = getUser();
    const isUserPost = user.uidUser === post.uidUser;
    const containerPost = document.createElement('div');
    containerPost.innerHTML = `
      <div class="post-feed">
        <p class="user-name">${post.user}</p>       
        <div class="post-div">
          <p class="post-text" contenteditable="false">${post.text}</p>
        </div>
      </div>   
        <div class="likes-div">
          <button id="btn-likes" class="likes-btn">
            <div class="heart"></div>
          </button>
          <div id="num-likes-${post.id}" class="number-likes">${post.likes.length}</div>
        </div>     
      `;

    const btnLike = containerPost.querySelector('.likes-btn');
    btnLike.addEventListener('click', async (e) => {
      e.preventDefault();
      likes(post.id).then(() => {
        post.likes.push(getUser().uid)
        const newLikes = post.likes.length;
        const numLikes = containerPost.querySelector('#num-likes-'+post.id);
        numLikes.innerHTML = newLikes;
      });
    });
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
    textPost.value = '';
  });
  readAndWritePost();

  btnLogout.addEventListener('click', () => {
    logout()
      .then(() => {
        redirect('#');
      });
  });

  return containerFeed;
};

// { <div id="buscar">
//           <input type="text" class="search-for" placeholder="Buscar..." />
//           <img src="img/lupa.png" id="btn-search" alt="Buscar" />
//         </div> */}