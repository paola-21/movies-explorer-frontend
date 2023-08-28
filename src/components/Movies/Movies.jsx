import React from "react";

import { api } from "../../utils/MoviesApi";
import * as mainApi  from '../../utils/MainApi';

import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import More from "./More/More";
import Preloader from "./Preloader/Preloader";

function Movies({ handleSearchButton, setSearch, filteredMovies, handlelikeClick, savedMovies, handleDeleteClick, setCheckbox,
  loggedIn}) {

  return (
    <>
      <SearchForm setSearch={setSearch} setCheckbox={setCheckbox} handleSearchButton={handleSearchButton}/>

      {!loggedIn ? (
      <Preloader/>
      ) : ( <MoviesCardList movies={filteredMovies} handlelikeClick={handlelikeClick} 
        savedMovies={savedMovies} handleDeleteClick={handleDeleteClick}
        />)   }

    </>
  );
}

export default Movies;
