class Api {
    constructor (basePath) {
      this._basePath = basePath;
   }
  
   _getHeaders() {
      return { 
         "Content-Type": "application/json",
      };
   }
  
   _getJson(res) {
      if (res.ok) {
          return res.json();
       }
          return Promise.reject(`Ошибка: ${res.status}`);
    }
  
   getMovies () {
      const p = fetch(`${this._basePath}/beatfilm-movies`, {
          method: "GET",
          headers: this._getHeaders(),
         //  credentials: 'include'
      });
      return p.then(this._getJson); 
   }

   // saveMovies () {
   //    const p = fetch(`${this._basePath}/movies/`, {
   //        method: "POST",
   //        headers: this._getHeaders(),
   //       //  credentials: 'include'
   //    });
   //    return p.then(this._getJson);
   // }


    
  }
  
  const api = new Api('https://api.nomoreparties.co');
  
  export {api};