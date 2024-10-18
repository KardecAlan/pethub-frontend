function save(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.log('Unable to save in local storage');
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
