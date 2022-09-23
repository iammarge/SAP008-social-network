import signUp from './lib/register.js';

const mainDiv = document.querySelector('.main');
mainDiv.innerHTML = signUp();
