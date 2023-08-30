import React from "react";

import { api } from "../../utils/MoviesApi";
import * as mainApi  from '../../utils/MainApi';

import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import More from "./More/More";
import Preloader from "./Preloader/Preloader";

function Movies({ search, handleSearchButton, setSearch, filteredMovies, handlelikeClick, savedMovies, handleDeleteClick, setCheckbox,
  loggedIn, searchError, checkbox}) {

    

  return (
    <>
      <SearchForm setSearch={setSearch} setCheckbox={setCheckbox} handleSearchButton={handleSearchButton} checkbox={checkbox} search={search}/>
      {!loggedIn ? (
      <Preloader/>
      ) : ( <MoviesCardList movies={filteredMovies} handlelikeClick={handlelikeClick} 
        handleDeleteClick={handleDeleteClick} savedMovies={savedMovies}
        />)   }
    </>
  );
}

export default Movies;
