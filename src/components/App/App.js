import React from "react";

import { api } from "../../utils/MoviesApi";
import * as MainApi from '../../utils/MainApi';

import { Route, Routes, useLocation, Navigate, useNavigate } from 'react-router-dom';

import Main from '../Main/Main.jsx';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import SavedMoviesCardList from '../SavedMovies/MoviesCardList/MoviesCardList';
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
  const [currentUser, setСurrentUser] = React.useState({});

  //регистрация

  function handleRegister({ name, email, password }) {

    MainApi
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
    MainApi
      .authorize({ email, password })
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          localStorage.setItem('token', data.token);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //загрузка и обновление данные профиля
  function handleProfile({ email, name }) {
    MainApi
      .profile({ email, name }, localStorage.getItem('token'))
      .then((newUser) => {
        setСurrentUser(newUser);
      })
      .catch((err) => {
        console.log(err);
      })
  }

    // //проверка токена
    // function handleTokenCheck() {
    //   const token = localStorage.getItem('token');
    //   if (token) {
    //     MainApi
    //       .checkToken(token)
    //       .then((user) => {
    //         navigate("/movies", { replace: true });
    //         setLoggedIn(true);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       })
    //   }
    // };

    // React.useEffect(() => {
    //   localStorage.getItem('token');
    //   handleTokenCheck();
    // }, [loggedIn]);


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
            <Profile onProfile={handleProfile} />
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
          <Movies />
          <Footer />
        </>} />

          <Route path="/saved-movies" element={
          <>
            <HeaderNavBar />
            <SearchForm />
            <SavedMoviesCardList />
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
