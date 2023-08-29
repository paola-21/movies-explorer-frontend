import React from "react";
import Preloader from "../Movies/Preloader/Preloader";

import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies({ handleSearchSavedMoviesButton, setSearch, savedMovies, handlelikeClick, handleDeleteClick, filteredSavedMovies, setCheckbox, loggedIn, searchError }) {
 console.log(filteredSavedMovies, 'filteredSavedMovies  в савед');

//  const getmovies = handleSearchSavedMoviesButton() ? filteredSavedMovies : savedMovies;

//  const searchMovies = () => {
//   handleSearchSavedMoviesButton();

//  }

  return (
    <>
        <SearchForm setSearch={setSearch} handleSearchSavedMoviesButton={handleSearchSavedMoviesButton} setCheckbox={setCheckbox} />
      {!loggedIn ? (
      <Preloader/>
      ) : ( <MoviesCardList movies={savedMovies} handlelikeClick={handlelikeClick} handleDeleteClick ={handleDeleteClick} filteredSavedMovies={filteredSavedMovies} savedMovies={savedMovies}/>)   }
    </>

  );
}

export default SavedMovies;
