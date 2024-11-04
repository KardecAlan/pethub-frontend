function save(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // sem necessidade de tratamento
  }
}

function get(key) {
  return localStorage.getItem(key);
}

function clear() {
  localStorage.clear();
}

export const storage = {
  save,
  get,
  clear,
};
