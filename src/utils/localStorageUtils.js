const TOKEN_KEY = "token";
const USERNAME_KEY = 'user_name';
const SHOPONWER_KEY = 'shopOnwer';
const USERID_KEY = 'user_id';
const CHECKED_KEY = 'checked';

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}
export const setToken = (value) => {
  localStorage.setItem(TOKEN_KEY, value)
}

export const getUserName = () => {
  return localStorage.getItem(USERNAME_KEY)
}
export const setUserName = (value) => {
  localStorage.setItem(USERNAME_KEY, value)
}

export const getShopOnwer = () => {
  return localStorage.getItem(SHOPONWER_KEY)
}
export const setShopOnwer = (value) => {
  localStorage.setItem(SHOPONWER_KEY, value)
}

export const gettUserId = () => {
  return localStorage.getItem(USERID_KEY)
}

export const setUserId = (value) => {
  localStorage.setItem(USERID_KEY, value)
}

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}

export const removeUserName = () => {
  localStorage.removeItem(USERNAME_KEY)
}

export const removeShopOnwer = () => {
  localStorage.removeItem(SHOPONWER_KEY)
}

export const removeUserId = () => {
  localStorage.removeItem(USERID_KEY)
}

export const getChecked_LC = () => {
  return localStorage.getItem(CHECKED_KEY)
}

export const setChecked_LC = (value) => {
  localStorage.setItem(CHECKED_KEY, value)
}