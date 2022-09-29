import signUp from './lib/register.js';
import templateLogin from './lib/login.js'

const mainDiv = document.querySelector('.main');
mainDiv.innerHTML = templateLogin();
