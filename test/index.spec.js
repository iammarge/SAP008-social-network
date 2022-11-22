import {
  login,
  signIn,
  signInGoogle,
  logout,
} from '../src/firebase/auth.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from '../src/firebase/exports.js';

jest.mock('../src/firebase/exports.js');

describe('loginEmailAndPassword', () => {
  it(' a função deve logar um usuario utilizando email e senha', () => {
    login('teste@teste.com', '123456');
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

describe('createUser', () => {
  it('a função deve criar um novo usuario com email e senha', async () => {
    createUserWithEmailAndPassword.mockResolvedValue({});
    await signIn();
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

describe('loginGoogle', () => {
  it(' a função deve fazer login com a conta do Google ', () => {
    signInGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});

describe('userLogout', () => {
  it(' a função deve fazer logout da conta ', () => {
    logout();
    expect(signOut).toHaveBeenCalledTimes(1);
  });
});
