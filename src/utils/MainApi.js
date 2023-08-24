export const BASE_URL = "http://localhost:3000";

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
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password }),
  })
  .then(getResponseData);
};

export const profile = ({ email, name }) => {
  return fetch(`${BASE_URL}/users/me`, {
     method: "PATCH",
     headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
     body: JSON.stringify({
        email: email,
        name: name,
     }),
     credentials: 'include',
   }).then(getResponseData);
 }



//  export const checkToken = (token) => {
//   //const token = localStorage.getItem('token');
//   return fetch(`${BASE_URL}/users/me`, {
//     credentials: 'include',
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => data);
// };

// export const saveMovies = () => {
//   const p = fetch(`${this._basePath}/movies`, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//   });
//   return p.then(getResponseData);
// };