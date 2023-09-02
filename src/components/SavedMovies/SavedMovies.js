import React from "react";
import Preloader from "../Movies/Preloader/Preloader";

import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies({ errors, setErrors, searchSavedMovies, setCheckboxSavedMovies, checkboxSavedMovies, handleCheckboxSavedMovies, handleSearchSavedMovies, setSearch, savedMovies, handlelikeClick, handleDeleteClick, filteredSavedMovies, setCheckbox, loggedIn, setSearchSavedMovies }) {

return (
    <>
        <SearchForm searchSavedMovies={searchSavedMovies} setErrors={setErrors} errors={errors} setCheckboxSavedMovies={setCheckboxSavedMovies} checkboxSavedMovies={checkboxSavedMovies} handleCheckboxSavedMovies={handleCheckboxSavedMovies} setSearch={setSearch} setSearchSavedMovies={setSearchSavedMovies} handleSearchSavedMovies={handleSearchSavedMovies} setCheckbox={setCheckbox} />
      {!loggedIn ? (
      <Preloader/>
      ) : ( <MoviesCardList movies={filteredSavedMovies} handlelikeClick={handlelikeClick} handleDeleteClick ={handleDeleteClick} filteredSavedMovies={filteredSavedMovies} savedMovies={savedMovies}/>)   }
    </>

  );
}

export default SavedMovies;
