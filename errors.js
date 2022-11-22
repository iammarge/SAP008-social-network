export function validateRegister(user, email, password) {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/;
  const validEmail = regex.test(email);
  if (user === '') {
    return 'Preencha o campo de usuário!';
  }
  if (email === '') {
    return 'Preencha o campo de e-mail!';
  }
  if (password === '') {
    return 'Digite sua senha!';
  }
  if (validEmail === false) {
    return 'Insira um e-mail válido (ex: email@email.com)';
  }
  if (!user && !email && !password) {
    return 'Por favor, preencha todos os campos!';
  }
  return '';
}

export function firebaseErrors(error) {
  switch (error) {
    case 'auth/invalid-email':
      return 'O e-mail inserido não é válido!';
    case 'auth/weak-password':
      return 'Sua senha deve ter 6 ou mais caracteres!';
    case 'auth/invalid-password':
      return 'Senha incorreta.';
    case 'auth/email-already-in-use':
      return 'O e-mail inserido já possui cadastro, faça seu login!';
    case 'auth/wrong-password':
      return 'O e-mail ou a senha não está correto!';
    case 'auth/user-not-found':
      return 'O e-mail não possui cadastro, registre-se!';
    default:
      return '';
  }
}

export function validateLogin(email, password) {
  if (email === '') {
    return 'Preencha o campo de e-mail!';
  }
  if (password === '') {
    return 'Preencha o campo de senha!';
  }
  return '';
}
