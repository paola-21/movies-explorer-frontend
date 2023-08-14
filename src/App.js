import { Route, Routes, useLocation } from 'react-router-dom';

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
  const { pathname } = useLocation();
  console.log(pathname);
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
          <Header />
          <Main />
          <Footer />
        </>} />

        <Route path="/movies" element={
        <>
          <Header />
          <SearchForm />
          <MoviesCardList />
          <Footer />
        </>} />

        <Route path="/saved-movies" element={
        <>
          <Header />
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
