import {
  getUser,
  logout,
} from '../firebase/auth.js';

import {
  createPost,
  readPost,
  likes,
  dislike,
  editPost,
  deletePost,
} from '../firebase/firestore.js';

import { redirect } from '../redirect.js';

export default () => {
  const body = document.body;
  body.classList.remove('login-page');
  const containerFeed = document.createElement('div');
  containerFeed.classList.add('container-feed');
  const templateFeed = `
    <div class=div-feed>
      <nav class="nav-header">
        <img class="logo-feed" src="img/logo.png" alt="logo Google">        
        <a id="btn-logout" class="button-sair">
          <img class="img-logout" src="img/logout.png" alt="Botão Sair">
        </a>
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
    const isUserPost = user.uid === post.uidUser;
    const containerPost = document.createElement('div');
    containerPost.innerHTML = `
      <div class="post-feed">
        <p class="user-name">${post.user}</p>       
        <div class="post-div">
          <p id="post-text-id" class="post-text" contenteditable="false">${post.text}</p>
        </div>
      </div>   
        <div class="likes-div">
          <button id="btn-likes" class="likes-btn">
            <div class="heart"></div>
          </button>
          <div id="num-likes-${post.id}" class="number-likes">${post.likes.length}</div>
          ${isUserPost ? '<button id="btn-edit" class="btn-edit"><img class="edit" src="img/edit.png" alt="Botão Editar"></button>' : ''}
          <div class="btn-confirm"></div>
         
          ${isUserPost ? '<button id="btn-delete-id" class="btn-delete"><img class="edit" src="img/delete.png" alt="Botão Excluir"></button>' : ''}
          
        </div>     
      `;

    const btnLike = containerPost.querySelector('.likes-btn');
    const btnEdit = containerPost.querySelector('#btn-edit');

    btnLike.addEventListener('click', async (e) => {
      e.preventDefault();
      // o if está verificando se o usuário logado NÃO(!) está incluso na lista de likes
      if (!post.likes.includes(getUser().uid)) {
        likes(post.id).then(() => {
          post.likes.push(getUser().uid);
          const newLikes = post.likes.length;
          const numLikes = containerPost.querySelector(`#num-likes-${post.id}`);
          numLikes.innerHTML = newLikes;
        });
      } else {
        dislike(post.id).then(() => {
          // nessa linha verifica a posição do usuário na array dos likes
          const index = post.likes.indexOf(getUser().uid);
          // apaga 1 elemento a partir da posição encontrada para frente
          post.likes.splice(index, 1);
          const newDislike = post.likes.length;
          const numLikes = containerPost.querySelector(`#num-likes-${post.id}`);
          numLikes.innerHTML = newDislike;
        });
      }
    });
    // o parametro do if apenas confirma quem é o autor do post p exibir o botão
    if (isUserPost) {
      btnEdit.addEventListener('click', async () => {
        const postText = containerPost.querySelector('#post-text-id');
        const btnConfirm = containerPost.querySelector('.btn-confirm');
        // setAttribute modifica o valor do atributo do <p> onde está o texto para tornar editável
        postText.setAttribute('contenteditable', true);
        const divEdit = document.createElement('div');
        divEdit.innerHTML = `
        <button clase="confirm" id="id-confirm">Confirmar</button>
        `;
        // Insere um elemento o elemento especificado(divEdit) na posição especificada
        btnConfirm.insertAdjacentElement('beforebegin', divEdit);

        divEdit.addEventListener('click', () => {
          postText.setAttribute('contenteditable', false);
          editPost(post.id, postText.textContent);
        });
      });

      const btnDelete = containerPost.querySelector('#btn-delete-id');

      if (isUserPost) {
        btnDelete.addEventListener('click', async () => {
          console.log('click delete ok');
          await deletePost(post.id);
          // eslint-disable-next-line no-use-before-define
          await readAndWritePost();
        });
      }
    }
    return containerPost;
  };

  const readAndWritePost = async () => {
    const listPost = await readPost();
    textPublish.innerHTML = '';
    listPost.forEach((post) => {
      textPublish.appendChild(templatePublish(post));
    });
  };
  readAndWritePost();

  btnPublish.addEventListener('click', (e) => {
    e.preventDefault();
    createPost(textPost.value);
    readAndWritePost();
    textPost.value = '';
  });

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
