import login from './lib/login.js';
import register from './lib/register.js';

const main = document.querySelector('.main');
const screens = () => {
  main.innerHTML = '';
  switch (window.location.hash) {
    case ' ':
      main.appendChild(login());
      break;
    case '#register':
      main.innerHTML = '';
      main.appendChild(register());
      break;
    default: main.appendChild(login());
  }
};

window.addEventListener('hashchange', () => {
  screens();
});

window.addEventListener('load', () => {
  screens();
});
