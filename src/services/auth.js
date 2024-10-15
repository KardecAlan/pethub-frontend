import {storage} from "./storage";

async function login(username, password) {
  const token = Math.random();
  storage.save('access_token', token);
}

async function logout() {
  storage.clear();
}

function hasToken() {
  return storage.get('access_token') !== null;
}


export const authServices = {
  login, logout, hasToken
}