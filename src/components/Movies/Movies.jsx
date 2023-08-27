import React from "react";

import { api } from "../../utils/MoviesApi";
import * as mainApi  from '../../utils/MainApi';

import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import More from "./More/More";

function Movies({ handleSearchButton, setSearch, filteredMovies, handlelikeClick }) {

  return (
    <>
      <SearchForm setSearch={setSearch} handleSearchButton={handleSearchButton}/>
      <MoviesCardList movies={filteredMovies} handlelikeClick={handlelikeClick}/>
    </>
  );
}

export default Movies;
