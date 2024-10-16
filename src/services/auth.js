import { storage } from './storage';

async function login(username, password) {
  if (username === '' || password === '') {
    throw new Error('Preencha os campos corretamente');
  }

  if (username !== 'waldeci' || password !== '1234') {
    throw new Error('Usuário ou senha inválidos');
  }

  const token = Math.random();
  storage.save('access_token', token);
  return true;
}

async function logout() {
  storage.clear();
}

function hasToken() {
  return storage.get('access_token') !== null;
}

export const authServices = {
  login,
  logout,
  hasToken,
};
