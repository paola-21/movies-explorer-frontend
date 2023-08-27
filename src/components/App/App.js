import React from "react";

import { api } from "../../utils/MoviesApi";
import * as mainApi from '../../utils/MainApi';

import { Route, Routes, useLocation, Navigate, useNavigate } from 'react-router-dom';

import Main from '../Main/Main.jsx';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import HeaderNavBar from '../Header/HeaderNavBar/HeaderNavBar';
import HeaderLogin from '../Header/HeaderLogin/HeaderLogin';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from "../Movies/Movies";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


import './App.css';

function App() {
 
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [errorsUser, setErrorsUser] = React.useState('');

  //регистрация
  function handleRegister({ name, email, password }) {
    signOut();
    mainApi
      .register({ name, email, password })
      .then(() => {
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //авторизация
  function handleAuthorize({ email, password }) {
    mainApi
      .authorize({ email, password })
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          localStorage.setItem('token', data.token);
          navigate("/movies", { replace: true });
          setErrorsUser('успех');
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorsUser('неуспех');
      });
  };

  function getCurrentUser(newData) {
    mainApi
      .getCurrentUser(newData, localStorage.getItem('token'))
      .then((data) => {
        setCurrentUser(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  //загрузка с сервера
  React.useEffect(() => {
    if (loggedIn) {
      getCurrentUser();
    }
  }, [loggedIn]);

  //обновление данные профиля
  function handleProfile({ email, name }) {
    mainApi
      .profile( email, name, localStorage.getItem('token') )
      .then((newUser) => {
        localStorage.setItem('token', newUser.token);
        setCurrentUser({
          email: newUser.email,
          name: newUser.name
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

    //проверка токена
    function handleTokenCheck() {
      const token = localStorage.getItem('token');
      if (token) {
        mainApi
          .checkToken(token)
          .then(() => {
            navigate("/movies", { replace: true });
            setLoggedIn(true);
          })
          .catch((err) => {
            console.log(err);
          })
      }
    };

    React.useEffect(() => {
      localStorage.getItem('token');
      handleTokenCheck();
    }, [loggedIn]);


    //часть movies
    const [movies, setMovies] = React.useState(null);
    const [search, setSearch] = React.useState('');
    const [checkbox, setCheckbox] = React.useState(false);
    const [ filteredMovies, setFilteredMovies ] = React.useState([]);
    const [savedMovie, setSavedMovies] = React.useState(null);
    const [ filteredSavedMovies, setFilteredSavedMovies ] = React.useState([]);
    


    //загрузка всех фильмов с сервера
      React.useEffect(() => {
      api
        .getMovies()
        .then((data) => {
          setMovies(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);


    //фильтр по имени и чекбокс, 
    const handleSearchButton = (e) => {
            e.preventDefault();

        let filtered = movies;

        if (search) {
            const s = search.toLowerCase();
            filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
            }

        if (checkbox) {
            filtered = filtered.filter(n => n.duration < 40);
            }
            setFilteredMovies(filtered);
    };


      //фильтр по имени и чекбокс, 
      const handleSearchSavedMoviesButton = (e) => {
        e.preventDefault();

    let filtered = savedMovie;

    if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
        }

    if (checkbox) {
      filtered = filtered.filter(n => n.duration < 40);
        }
        setFilteredSavedMovies(filtered);
};
    
    //загрузка сохранненых фильмов с сервера
    React.useEffect(() => {
      mainApi
      .getsaveMovies()
        .then((data) => {
          setSavedMovies(data)
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    

  //сохраняем карточку фильма

    const handlelikeClick = (movie) => {
      const NewMovie = {
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: "https://api.nomoreparties.co" + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: "https://api.nomoreparties.co" + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }
        mainApi
      .saveMovies (NewMovie)
      .then((savedMovie) => setSavedMovies([savedMovie, ...setSavedMovies]))
      .catch((err) => { console.log(err)});
  };

    function signOut() {
      localStorage.removeItem('token');
      setLoggedIn(false);
    }


  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='app'>
      <div className='page'>

        <Routes>

        <Route path="/signup" element={
            <Register onRegister={handleRegister}/>
        } />

        <Route path="/signin" element={
                  <Login onLogin={handleAuthorize}/>
              } />
        
        <Route path="/profile" element={
          <>
            <HeaderNavBar/>
            <Profile handleProfile={handleProfile}/>
          </>}
        />

        <Route path="/" element={
          <>
            <HeaderLogin />
            <Main />
          </>}
        />

        <Route path="/movies" element={
        <>
          <HeaderNavBar/>
          <Movies handleSearchButton={handleSearchButton} setSearch={setSearch} filteredMovies={filteredMovies} handlelikeClick={handlelikeClick}/>
          <Footer />
        </>} />

          <Route path="/saved-movies" element={
          <>
            <HeaderNavBar />
            <SavedMovies handleSearchButton={handleSearchSavedMoviesButton} setSearch={setSearch} filteredMovies={filteredSavedMovies} handlelikeClick={handlelikeClick} />
            <Footer />
          </>} />

          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
