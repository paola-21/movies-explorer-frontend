import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
//import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import More from '../Movies/More/More';
import Footer from '../Footer/Footer';

import './App.css'

function App() {
  return (
    <div className="App">
      <div className='app__container'>

      <Routes>
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
          <More />
        </>} />

      </Routes>

      <Footer />
      </div>
    </div>
  );
}

export default App;
