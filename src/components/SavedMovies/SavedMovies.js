import React from "react";

import { api } from "../../utils/MoviesApi";

import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies({ handleSearchSavedMoviesButton, setSearch, savedMovies, handlelikeClick, handleDeleteClick, filteredSavedMovies, setCheckbox }) {

  return (
    <>
        <SearchForm setSearch={setSearch} handleSearchSavedMoviesButton={handleSearchSavedMoviesButton} setCheckbox={setCheckbox}/>
        <MoviesCardList movies={savedMovies} handlelikeClick={handlelikeClick} handleDeleteClick ={handleDeleteClick} filteredSavedMovies={filteredSavedMovies}/>
    </>
  );
}

export default SavedMovies;
