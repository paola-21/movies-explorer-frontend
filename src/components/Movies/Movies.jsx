import React from "react";

import { api } from "../../utils/MoviesApi";
import * as mainApi  from '../../utils/MainApi';

import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";

function Movies({ isloading, searchValue, search, handleSearchButton, setSearch, filteredMovies, handlelikeClick, savedMovies, handleDeleteClick, setCheckbox,
   checkbox, handleCheckbox, movies, searchLength}) {

  return (
    <>
      <SearchForm movies={movies} setSearch={setSearch} searchValue={searchValue} setCheckbox={setCheckbox} handleSearchButton={handleSearchButton} checkbox={checkbox} search={search} handleCheckbox={handleCheckbox}/>
      {isloading ? (
      <Preloader/>
      ) : ( 
      <MoviesCardList movies={filteredMovies} handlelikeClick={handlelikeClick} 
        handleDeleteClick={handleDeleteClick} savedMovies={savedMovies} search={search} searchLength={searchLength}
        />)   }
    </>
  );
}

export default Movies;