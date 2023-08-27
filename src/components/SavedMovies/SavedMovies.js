import React from "react";

import { api } from "../../utils/MoviesApi";

import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies({ handleSearchButton, setSearch, filteredMovies, handlelikeClick }) {

  return (
    <>
        <SearchForm setSearch={setSearch} handleSearchButton={handleSearchButton}/>
        <MoviesCardList movies={filteredMovies} handlelikeClick={handlelikeClick}/>
    </>
  );
}

export default SavedMovies;
