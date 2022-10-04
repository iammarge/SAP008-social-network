import login from './lib/login.js';
import register from './lib/register.js';



const init = () => {
    window.addEventListener('hashchange', () => console.log(window.location.hash));
  };

  window.addEventListener('load', () => {
    init();
  });