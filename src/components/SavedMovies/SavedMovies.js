import React from "react";
import Preloader from "../Movies/Preloader/Preloader";

import { api } from "../../utils/MoviesApi";

import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies({ handleSearchSavedMoviesButton, setSearch, savedMovies, handlelikeClick, handleDeleteClick, filteredSavedMovies, setCheckbox, loggedIn, searchError }) {

  return (
    <>
        <SearchForm setSearch={setSearch} handleSearchSavedMoviesButton={handleSearchSavedMoviesButton} setCheckbox={setCheckbox}/>
        {searchError && (
        <span className='movies__text'>
          Во время запроса произошла ошибка.
          Возможно, проблема с соединением или сервер недоступен. 
          Подождите немного и попробуйте ещё раз
        </span>
      )}
      {!loggedIn ? (
      <Preloader/>
      ) : ( <MoviesCardList movies={savedMovies} handlelikeClick={handlelikeClick} handleDeleteClick ={handleDeleteClick} filteredSavedMovies={filteredSavedMovies}/>)   }
    </>

  );
}

export default SavedMovies;
