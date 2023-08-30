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
import InfoTooltip from '../InfoTooltip/InfoTooltip'; 
import imageRegister from '../../images/Register.png';
import imageNoRegister from '../../images/NoRegister.png';
import ProtectedRoute from '../ProtectedRoute';


import './App.css';

function App() {
 
  const navigate = useNavigate();
  //const checkboxValue = JSON.parse(localStorage.getItem('checkboxValue'));
  
  const checkboxValue = localStorage.getItem('checkboxValue') === 'true' ? true : false ;
  const searchValue = localStorage.getItem('searchValue');



  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [errorsUser, setErrorsUser] = React.useState('');
  const [movies, setMovies] = React.useState(null);
  const [search, setSearch] = React.useState(searchValue || '');
  const [searchSavedMovies, setSearchSavedMovies] = React.useState('');
  const [checkbox, setCheckbox] = React.useState(checkboxValue || false);
  const [ filteredMovies, setFilteredMovies ] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState(null);
  const [ filteredSavedMovies, setFilteredSavedMovies ] = React.useState([]);
  const [isInfoTooltip, setIsInfoTooltip] = React.useState(false);
  const [isInfoTooltipError, setIsInfoTooltipError] = React.useState(false);
  const [isInfoTooltipErrorMovies, setIsInfoTooltipErrorMovies] = React.useState(false);
  const [isInfoTooltipProfile, setIsInfoTooltipProfile] = React.useState(false);

  let {pathname} = useLocation();
  // попапы
  function handleInfoTooltipProfile() {
    setIsInfoTooltipProfile(true);
  }

  function handleInfoTooltip() {
    setIsInfoTooltip(true);
  }

  function handleInfoTooltipError() {
    setIsInfoTooltipError(true);
  }

  function handleInfoTooltipMovies() {
    setIsInfoTooltipErrorMovies(true);
  }

    //закрытие всех попапов
    function closeAllPopups() {
      setIsInfoTooltip(false);
      setIsInfoTooltipError(false);
      setIsInfoTooltipProfile(false);
      setIsInfoTooltipErrorMovies(false);
    }

  //регистрация
  function handleRegister({ name, email, password }) {
    signOut();
    mainApi
      .register({ name, email, password}, localStorage.getItem('token'))
      .then(() => {
        handleInfoTooltip();
        navigate("/movies", { replace: true });
        handleAuthorize({ email, password });
      })
      .catch((err) => {
        handleInfoTooltipError();
        console.log(err);
      });
  }

  //авторизация
  function handleAuthorize({ email, password }) {
    mainApi
      .authorize({ email, password }, localStorage.getItem('token'))
      .then((data) => {
        if (data.token) {
          handleInfoTooltip();
          setLoggedIn(true);
          localStorage.setItem('token', data.token);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        handleInfoTooltipError();
        console.log(err);
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
        handleInfoTooltipProfile();
        localStorage.setItem('token', newUser.token);
        console.log(newUser);
        setCurrentUser({
          email: newUser.data.email,
          name: newUser.data.name
        });
        
      })
      .catch((err) => {
        handleInfoTooltipError();
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

    //загрузка всех фильмов с сервера
      React.useEffect(() => {
      api
        .getMovies()
        .then((data) => {
          setMovies(data);
        })
        .catch((err) => {
          console.log(err);
          handleInfoTooltipMovies();
        });
    }, []);

    //фильтр по имени
    const handleSearchButton = (e) => {
            e.preventDefault();

        let filtered = movies;
        if (search) {
            const s = search.toLowerCase();
            filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
            localStorage.setItem('searchValue', s);
            }         
            setFilteredMovies(filtered);
    };

    // чек бокс
    React.useEffect(() => {
        if (checkbox && filteredMovies) {
        let filtered = filteredMovies;
          filtered = filtered.filter(n => n.duration < 40);
          console.log(filtered);
          setFilteredMovies(filtered);
        } else {
          if (movies) {
            let filtered = movies;
            const s = search.toLowerCase();
            filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
            setFilteredMovies(filtered);
          }
           
        }
        
        localStorage.setItem('checkboxValue', String(checkbox));
    }, [ checkbox, movies ])
  

    React.useEffect(() => {
      let filtered = movies;
      if (movies) {
        if (searchValue) {
          const s = searchValue.toLowerCase();
          filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
          }

      if (checkboxValue) {
          filtered = filtered.filter(n => n.duration < 40);
          }
          setFilteredMovies(filtered);
      }

      console.log(filteredMovies, 'filteredMovies');

    }, [ movies, checkboxValue, searchValue ])



//фильтр по имени сохраненных фильмов
const handleSearchSavedMoviesButton = (e) => {
  e.preventDefault();

  handleSearchSavedMovies();
  
};

//фильтр по имени сохраненных фильмов
const handleSearchSavedMovies = () => {
  let filtered = savedMovies;
  console.log(savedMovies, 'savedMovies')
  if (searchSavedMovies) {
  const s = searchSavedMovies.toLowerCase();
  filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
 
  }         
  setFilteredSavedMovies(filtered);
  
};


// чек бокс coxраненных фильмов
React.useEffect(() => {
  if (checkbox && filteredSavedMovies) {
  let filtered = filteredSavedMovies;
    filtered = filtered.filter(n => n.duration < 40);
    console.log(filtered);
    setFilteredSavedMovies(filtered);
  } else {
    if (savedMovies) {
      let filtered = savedMovies;
      const s = search.toLowerCase();
      filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
      setFilteredSavedMovies(filtered);
    }
  }
  
}, [ checkbox, savedMovies ])
    
//загрузка сохранненых фильмов с сервера
React.useEffect(() => {
  mainApi
  .getSavedMovies()
    .then((response) => {
      setSavedMovies(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
    
}, []);


  //сохраняем карточку фильма
  const handlelikeClick = (movie) => {
    const URL = 'https://api.nomoreparties.co/';
    const NewMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: 'https://api.nomoreparties.co/' + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: 'https://api.nomoreparties.co/' + movie.thumbnail,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }
    //проверем есть ли карточка в сохраненных фильмах
      const isSevedMovies = savedMovies.some((item) => (item.movieId === movie.id));
      console.log(isSevedMovies, 'isSevedMovies');
      //усли нет, то сохраняем
    if (!isSevedMovies) {
    mainApi
      .saveMovies(NewMovie)
      .then((NewMovie) => {
        setSavedMovies([NewMovie, ...setSavedMovies])})
      .catch((err) => console.log(err));
    } else {
    const isSevedMovieId = savedMovies.find((item) => item.movieId === movie.id)._id;
    mainApi
      .deleteMovies(isSevedMovieId)
      .then(() => setSavedMovies((state) => 
      state.filter((item) => item.movieId === movie.id)
      ))
      .catch((err) => { console.log(err)});
      }
  };

  //удаляем карточку фильма

  const handleDeleteClick = (movie) => {
    mainApi
      .deleteMovies(movie._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item.movieId !== movie.movieId)
        );
      })
      .catch((err) => { console.log(err)});
  };

    function signOut() {
      localStorage.removeItem('token');
      localStorage.removeItem('searchValue');
      localStorage.removeItem('checkboxValue');
      localStorage.clear();
      setLoggedIn(false);
      navigate("/", { replace: true });
    }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className='app'>
      <div className='page'>

        <Routes>
        <Route
              path="/"
              element={
                loggedIn ? (
                  <>
                  <HeaderNavBar />
                  <Main /></>

                ) : (
                  <>
                  <HeaderLogin />
                  <Main />
                  </>
                )
              }
            />

        <Route path="/signup" element={
            <Register onRegister={handleRegister}/>
        } />

        <Route path="/signin" element={
                  <Login onLogin={handleAuthorize}/>
              } />


           <Route
              path="/profile"
              element={
                <>
                <ProtectedRoute
                  element={HeaderNavBar}
                  loggedIn={loggedIn}
                />

                <ProtectedRoute
                  element={Profile}
                  loggedIn={loggedIn}
                  handleProfile={handleProfile}
                  signOut={signOut}
                />
              </>
              }
            />
        
        <Route path="/" element={
          <>
            <HeaderLogin />
            <Main />
          </>}
        />

            <Route
              path="/movies"
              element={
                <>
                <ProtectedRoute
                  element={HeaderNavBar}
                  loggedIn={loggedIn}
                />

                <ProtectedRoute
                  element={Movies}
                  loggedIn={loggedIn}
                  handleSearchButton={handleSearchButton} setSearch={setSearch} search={search}
          filteredMovies={filteredMovies} handlelikeClick={handlelikeClick} savedMovies={savedMovies} 
          handleDeleteClick={handleDeleteClick} setCheckbox={setCheckbox} checkbox={checkbox}
                />
                <ProtectedRoute
                  element={Footer}
                  loggedIn={loggedIn}
                />
              </>
              }
            />

          <Route
              path="/saved-movies"
              element={
                <>
                <ProtectedRoute
                  element={HeaderNavBar}
                  loggedIn={loggedIn}
                />

                <ProtectedRoute
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  handleSearchSavedMoviesButton={handleSearchSavedMoviesButton} handleSearchSavedMovies={handleSearchSavedMovies} setCheckbox={setCheckbox} setSearchSavedMovies={setSearchSavedMovies} filteredSavedMovies={filteredSavedMovies} savedMovies={savedMovies} handlelikeClick={handlelikeClick} 
            handleDeleteClick={handleDeleteClick}
                />
                <ProtectedRoute
                  element={Footer}
                  loggedIn={loggedIn}
                />
              </>
              }
            />

          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </div>
    </div>

    <InfoTooltip
              name="register"
              title="Вы успешно зарегистрировались!"
              image={imageRegister}
              isOpen={isInfoTooltip}
              onClose={closeAllPopups}
            />

    <InfoTooltip
          name="register"
          title="Данные профиля обновлены"
          image={imageRegister}
          isOpen={isInfoTooltipProfile}
          onClose={closeAllPopups}
        />

        <InfoTooltip
          name="error"
          title="Что-то пошло не так! Попробуйте ещё раз."
          image={imageNoRegister}
          isOpen={isInfoTooltipError}
          onClose={closeAllPopups}
        />

    <InfoTooltip
          name="error"
          title="Во время запроса произошла ошибка.
          Возможно, проблема с соединением или сервер недоступен. 
          Подождите немного и попробуйте ещё раз"
          image={imageNoRegister}
          isOpen={isInfoTooltipErrorMovies}
          onClose={closeAllPopups}
        />
    </CurrentUserContext.Provider>
  );
}

export default App;
