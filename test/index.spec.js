import { login } from '../src/firebase/auth.js';
import { signInWithEmailAndPassword } from '../src/firebase/exports.js';

jest.mock('../src/firebase/exports.js');

describe('loginEmailAndPassword', () => {
  it(' a função deve logar um usuario utilizando email e senha', () => {
    login('teste@teste.com', '123456');
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});
