export const TOOL_KEYS = {
  LOGIN_KEY: 'LOGIN_KEY',
  USER_NAME: 'USER_NAME'
}

export const setLocalStorage = (k, v) => {
  if (!k || typeof k !== 'string') return;
  localStorage.setItem(k, v);
};

export const getLocalStorage = (k) => {
  if (!k || typeof k !== 'string') return;
  let v = localStorage.getItem(k);
  return v;
};
