export const BASE_URL = "https://api.paola.movies-explorer.nomoreparties.sbs";

const getResponseData = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    credentials: 'include',
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(getResponseData);
};

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    credentials: 'include',
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
  .then(getResponseData);
};

export const profile = (email, name ) => {
  return fetch(`${BASE_URL}/users/me`, {
     method: "PATCH",
     headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
     body: JSON.stringify({
        email: email,
        name: name,
     }),
     credentials: 'include',
   }).then(getResponseData);
 }

 export const getCurrentUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
     method: "GET",
     headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
     credentials: 'include',
   }).then(getResponseData);
   
 }

 export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    credentials: 'include',
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const deleteToken = (token) => {
  return fetch(`${BASE_URL}/signout`, {
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
  })
  .then(getResponseData);
};


export const URL = 'https://api.nomoreparties.co/';

export const saveMovies = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
  })
  .then(getResponseData);
};

export const getSavedMovies = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
  })
  .then(getResponseData);
};

export const deleteMovies = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
      credentials: 'include',
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
  })
  .then(getResponseData);
};