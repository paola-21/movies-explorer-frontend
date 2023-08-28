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


import './App.css';

function App() {
 
  const navigate = useNavigate();
  //const checkboxValue = JSON.parse(localStorage.getItem('checkboxValue'));
  
  const checkboxValue = localStorage.getItem('checkboxValue') === 'true' ? true : false ;
  



  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [errorsUser, setErrorsUser] = React.useState('');
  const [movies, setMovies] = React.useState(null);
  const [search, setSearch] = React.useState('');
  const [checkbox, setCheckbox] = React.useState(checkboxValue || false);
  const [ filteredMovies, setFilteredMovies ] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [ filteredSavedMovies, setFilteredSavedMovies ] = React.useState([]);
  const [isInfoTooltip, setIsInfoTooltip] = React.useState(false);
  const [isInfoTooltipError, setIsInfoTooltipError] = React.useState(false);
  const [isInfoTooltipErrorMovies, setIsInfoTooltipErrorMovies] = React.useState(false);
  const [isInfoTooltipProfile, setIsInfoTooltipProfile] = React.useState(false);
  const [searchError, setSearchError] = React.useState('');

console.log(typeof checkboxValue, 'checkboxValue');
console.log(checkbox, 'checkbox');
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
      .authorize({ email, password })
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
        setCurrentUser({
          email: newUser.email,
          name: newUser.name
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
          setSearchError(err);
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

        // if (checkbox) {
        //     filtered = filtered.filter(n => n.duration < 40);
        //     }
        //     localStorage.setItem('checkboxValue', checkbox);
            setFilteredMovies(filtered);
    };

    // чек бокс
    React.useEffect(() => {
        if (checkbox && filteredMovies) {
        let filtered = filteredMovies;
          filtered = filtered.filter(n => n.duration < 40);
          console.log(filtered);
          setFilteredMovies(filtered);
          //localStorage.setItem('checkboxValue', 'true');
        } else {
          if (movies) {
            let filtered = movies;
            const s = search.toLowerCase();
            filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
            // localStorage.setItem('searchValue', s);
            setFilteredMovies(filtered);
            //localStorage.setItem('checkboxValue', 'false');
  
            console.log(s);
          }
          //JSON.parse(localStorage.getItem('checkboxValue'))

           //localStorage.setItem('checkboxValue', String(checkbox));
           
        }
        
        // localStorage.getItem('checkboxValue', checkbox);
        localStorage.setItem('checkboxValue', String(checkbox));
        console.log(checkbox, 'checkbox22');
      console.log(checkbox, 'checkbox11');

    }, [ checkbox, movies ])




      const handleCheckbox = (isChecked) => {
        // e.preventDefault();
        // let filtered = movies;
        // setCheckbox(e.target.checked);
        //setCheckbox(!checkbox)
        console.log(isChecked, 'isChecked');



        // if (checkbox) {
        //   filtered = filtered.filter(n => n.duration < 40);
        //   }
        //   localStorage.setItem('checkboxValue', checkbox);
        //   setFilteredMovies(filtered);
          
      }

      console.log(checkbox, 'checkbox');
      


  //localStorage 
  const searchValue = localStorage.getItem('searchValue');
  //const checkboxValue = localStorage.getItem('checkboxValue');

    React.useEffect(() => {
      let filtered = movies;
      if (movies) {
        if (searchValue) {
          const s = searchValue.toLowerCase();
          filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
          }
       console.log(searchValue);

      if (checkboxValue) {
          filtered = filtered.filter(n => n.duration < 40);
          }
          setFilteredMovies(filtered);
      }

    }, [ movies, checkboxValue, searchValue ])


      //фильтр по имени и чекбокс сохраненные фильмы
      const handleSearchSavedMoviesButton = (e) => {
          e.preventDefault();

          let filtered = savedMovies;

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
        .then((response) => {
          setSavedMovies(response.data);
        })
        .catch((err) => {
          setSearchError(err)
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
      image: URL + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: URL + movie.image.formats.thumbnail.url,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }
      const isSevedMovies = savedMovies.some((item) => (item.movieId === movie.id));
    if (!isSevedMovies) {
    mainApi
      .saveMovies(NewMovie)
      .then((NewMovie) => {
        NewMovie.image = URL + movie.image.url;
        setSavedMovies([NewMovie, ...setSavedMovies])})
      .catch((err) => {setSearchError(err)});
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
      setLoggedIn(false);
      navigate("/movies", { replace: true });
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
          <Movies handleSearchButton={handleSearchButton} setSearch={setSearch} handleCheckbox={handleCheckbox} 
          filteredMovies={filteredMovies} handlelikeClick={handlelikeClick} savedMovies={savedMovies} 
          handleDeleteClick={handleDeleteClick} loggedIn={loggedIn} searchError={searchError} setCheckbox={setCheckbox} checkbox={checkbox}/>
          <Footer />
        </>} />

          <Route path="/saved-movies" element={
          <>
            <HeaderNavBar />
            <SavedMovies handleSearchSavedMoviesButton={handleSearchSavedMoviesButton} setCheckbox={setCheckbox} setSearch={setSearch} filteredSavedMovies={filteredSavedMovies} savedMovies={filteredSavedMovies} handlelikeClick={handlelikeClick} 
            handleDeleteClick={handleDeleteClick} loggedIn={loggedIn} searchError={searchError}/>
            <Footer />
          </>} />

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
