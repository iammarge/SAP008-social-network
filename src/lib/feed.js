

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
      <footer> Developed by: Marjorie Santos e Tamyres França.</footer>
    </div>  
`;
    containerFeed.innerHTML = templateFeed;
  
  
    return containerFeed;
  };