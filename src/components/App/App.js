import React from "react";

import { api } from "../../utils/MoviesApi";
import * as mainApi from '../../utils/MainApi';

import { Route, Routes, useLocation, Navigate, useNavigate } from 'react-router-dom';

import Main from '../Main/Main.jsx';
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

  const checkboxValue = localStorage.getItem('checkboxValue') === 'true' ? true : false ;
  // const [searchSavedMovies, setSearchSavedMovies] = React.useState('');
  // const [checkboxSavedMovies, setCheckboxSavedMovies] = React.useState(false);
  const [checkbox, setCheckbox] = React.useState(checkboxValue || false);
   const [savedMovies, setSavedMovies] = React.useState([]); //все  сохраненные фильмы
  // const [ filteredSavedMovies, setFilteredSavedMovies ] = React.useState([]); // отфильрованные фильмы
  const [isInfoTooltip, setIsInfoTooltip] = React.useState(false);
  const [isInfoTooltipError, setIsInfoTooltipError] = React.useState(false);
  const [isInfoTooltipErrorMovies, setIsInfoTooltipErrorMovies] = React.useState(false);
  const [isInfoTooltipProfile, setIsInfoTooltipProfile] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const searchValue = localStorage.getItem('searchValue');
  const [search, setSearch] = React.useState(searchValue || '');
 
  const [isloading, setIsloading] = React.useState(false);


  

  //регистрация
  function handleRegister({ name, email, password }) {
    mainApi
      .register({ name, email, password})
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
      .authorize({ email, password })
      .then((data) => {
        if (data.token) {
          handleInfoTooltip();
          localStorage.setItem('token', data.token);
          setLoggedIn(true);
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

function deleteToken(token) {
  mainApi
  .deleteToken(token, localStorage.removeItem('token'))
  .then(() => {
  })
  .catch((err) => {
    handleInfoTooltipError();
    console.log(err);
  });
}


    React.useEffect(() => {
      //localStorage.getItem('token');
      handleTokenCheck();
    }, [loggedIn]);

    function signOut() {
      localStorage.removeItem('token');
      localStorage.removeItem('searchValue');
      localStorage.removeItem('checkboxValue');
      localStorage.removeItem('movies');
      localStorage.removeItem('filteredMovies');
      deleteToken();
      localStorage.clear({});
      setLoggedIn(false);
      navigate("/", { replace: true });
    }

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
  
    //часть movies

    const [movies, setMovies] = React.useState(
      JSON.parse(localStorage.getItem("movies")) || [] );
    const [ filteredMovies, setFilteredMovies ] = React.useState([]);

const [ searchLength, SetSearchLength] = React.useState(false);


  //фильтр по имени
  const handleSearchButton = () => {           
        if (movies.length === 0) {
          setIsloading(true)
          api
          .getMovies()
          .then((data) => {
            localStorage.setItem("movies", JSON.stringify(data));
            setMovies(data);
          })
          .then(() => {
            let filtered = JSON.parse(localStorage.getItem("movies"));
              if (search) {
                  const s = search.toLowerCase();
                  filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
                  localStorage.setItem('searchValue', s);
                  setFilteredMovies(filtered);
                  if (filtered.length === 0) {
                    SetSearchLength(true)
                  } else {
                    SetSearchLength(false)
                  } 
                  }
              if(!search) {
                console.log('не забит поиск')
              }
          })
          .catch((err) => {
            console.log(err);
            handleInfoTooltipMovies();
          })
          .finally(() => 
          setIsloading(false))

        } else {
          let filtered = movies;
              if (search) {
                  const s = search.toLowerCase();
                  filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
                  localStorage.setItem('searchValue', s);
                  setFilteredMovies(filtered);
                  if (filtered.length === 0) {
                    SetSearchLength(true)
                  } else {
                    SetSearchLength(false)
                  } 
                  }
              if(!search) {
                console.log('не забит поиск')
              }
        }
       
        }


   // чек бокс 
   const handleCheckbox = () => {
    if (checkbox && filteredMovies.length) {
      let filtered = filteredMovies;
        filtered = filtered.filter(n => n.duration < 40);
        setFilteredMovies(filtered);
      } else {
        if (filteredMovies) {
          let filtered = filteredMovies;
          const s = search.toLowerCase();
          filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
          setFilteredMovies(filtered);
        }
      }
      localStorage.setItem('checkboxValue', String(checkbox));
  }

  // чек бокс beatfilm-movies
  React.useEffect(() => {
      handleCheckbox();
  }, [ checkbox ])

  React.useEffect(() => {
      let filtered = filteredMovies;
      if (filteredMovies) {
        if (searchValue) {
          const s = searchValue.toLowerCase();
          filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
          setFilteredMovies(filtered);
          }
  
      if (checkboxValue) {
          filtered = filtered.filter(n => n.duration < 40);
          setFilteredMovies(filtered);
          }
    }
  }, [ checkboxValue, searchValue ])

  React.useEffect(() => {
      let filtered = movies;
      if (movies) {
        if (searchValue) {
          const s = searchValue.toLowerCase();
          filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
          setFilteredMovies(filtered);
          }
  
      if (checkboxValue) {
          filtered = filtered.filter(n => n.duration < 40);
          setFilteredMovies(filtered);
          }
      }
    //}

  }, [ checkboxValue, searchValue, movies])

  //сохраняем карточку фильма
  const handlelikeClick = (movie) => {
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
      const isSevedMovies = savedMovies.some((item) => item.movieId === movie.id);
      //усли нет, то сохраняем
    if (!isSevedMovies) {
    mainApi
      .saveMovies(NewMovie)
      .then((NewMovie) => {
        setSavedMovies([...savedMovies, NewMovie.data])})
      .catch((err) => console.log(err));
    } else {
    const isSevedMovieId = savedMovies.find((item) => item.movieId === movie.id);
    mainApi
      .deleteMovies(isSevedMovieId._id)
      .then(() => setSavedMovies((savedMovies) => 
      savedMovies.filter((item) => item.movieId !== movie.id)
      ))
      .catch((err) => { console.log(err)});
      }
  };


  //удаляем карточку сохраненного фильма

  const handleDeleteClick = (movie) => {
    const savedMoviesData = savedMovies;

    console.log(savedMoviesData, 'savedMoviesData')
    mainApi
      .deleteMovies(movie._id)
      .then(() => {
        setSavedMovies((savedMovies) =>
        savedMovies.filter((item) => item.movieId !== movie.movieId)
        );
      })
      .catch((err) => { console.log(err)});

  };

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
        
    }, [loggedIn]);




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
                  Movies={Movies}
                  loggedIn={loggedIn} isloading={isloading}
                  searchLength={searchLength}
                  handleSearchButton={handleSearchButton} setSearch={setSearch} search={search}
          filteredMovies={filteredMovies} handlelikeClick={handlelikeClick} savedMovies={savedMovies} 
          handleDeleteClick={handleDeleteClick} setCheckbox={setCheckbox} checkbox={checkbox} searchValue={searchValue} handleCheckbox={handleCheckbox} 
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
                   setCheckbox={setCheckbox} savedMovies={savedMovies} handlelikeClick={handlelikeClick} 
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