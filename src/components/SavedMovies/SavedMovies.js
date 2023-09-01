import React from "react";
import Preloader from "../Movies/Preloader/Preloader";

import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies({ handleSearchSavedMoviesButton, handleSearchSavedMovies, setSearch, savedMovies, handlelikeClick, handleDeleteClick, filteredSavedMovies, setCheckbox, loggedIn, setSearchSavedMovies }) {

React.useEffect(() =>{
  handleSearchSavedMovies();
})

return (
    <>
        <SearchForm setSearch={setSearch} setSearchSavedMovies={setSearchSavedMovies} handleSearchSavedMoviesButton={handleSearchSavedMoviesButton} setCheckbox={setCheckbox} />
      {!loggedIn ? (
      <Preloader/>
      ) : ( <MoviesCardList movies={filteredSavedMovies} handlelikeClick={handlelikeClick} handleDeleteClick ={handleDeleteClick} filteredSavedMovies={filteredSavedMovies} savedMovies={savedMovies}/>)   }
    </>

  );
}

export default SavedMovies;
