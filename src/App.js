import { Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SearchForm from './components/Movies/SearchForm/SearchForm';
import MoviesCardList from './components/Movies/MoviesCardList/MoviesCardList';
import Footer from './components/Footer/Footer';
import SavedMoviesCardList from './components/SavedMovies/MoviesCardList/MoviesCardList';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import HeaderNavBar from './components/Header/HeaderNavBar/HeaderNavBar';
import HeaderLogin from './components/Header/HeaderLogin/HeaderLogin';
import Profile from './components/Profile/Profile';
import PageNotFound from './components/PageNotFound/PageNotFound';

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
      
      <Route path="/profile" element={
        <>
          <HeaderNavBar/>
          <Profile/>
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
        <SearchForm />
        <MoviesCardList />
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
  );
}

export default App;
