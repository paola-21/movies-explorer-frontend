import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SearchForm from './components/Movies/SearchForm/SearchForm';
import MoviesCardList from './components/Movies/MoviesCardList/MoviesCardList';
import Footer from './components/Footer/Footer';
import SavedMoviesCardList from './components/SavedMovies/MoviesCardList/MoviesCardList';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

import './App.css'

function App() {
  return (
    <div className="App">
      <div className='app__container'>

      <Routes>

      <Route path="/signup" element={
          <Register/>
      } />

      <Route path="/signin" element={
                <Login/>
            } />

        <Route path="/" element={
        <>
          <Header 
            movies={""}
            moviesLink={""}
            moviesText={"Фильмы"}
            saved={""}
            savedLink={""}
            savedText={"Сохраненные фильмы"}
            register={""}
            registerLink={""}
            registerText={"Регистрация"}
            login={""}
            loginLink={""}
            loginText={"Войти"}
          />
          <Main />
          <Footer />
        </>} />

        <Route path="/movies" element={
        <>
          <Header 
            movies={""}
            moviesLink={""}
            moviesText={"Фильмы"}
            saved={""}
            savedLink={""}
            savedText={"Сохраненные фильмы"}
            register={""}
            registerLink={""}
            registerText={"Регистрация"}
            login={""}
            loginLink={""}
            loginText={"Войти"}
          />
          <SearchForm />
          <MoviesCardList />
          <Footer />
        </>} />

        <Route path="/saved-movies" element={
        <>
          <Header 
            movies={""}
            moviesLink={""}
            moviesText={"Фильмы"}
            saved={""}
            savedLink={""}
            savedText={"Сохраненные фильмы"}
            register={""}
            registerLink={""}
            registerText={"Регистрация"}
            login={""}
            loginLink={""}
            loginText={"Войти"}
          />
          <SearchForm />
          <SavedMoviesCardList />
          <Footer />
        </>} />

      </Routes>
      </div>
    </div>
  );
}

export default App;
