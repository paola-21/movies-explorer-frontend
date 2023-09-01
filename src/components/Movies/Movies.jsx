import React from "react";

import { api } from "../../utils/MoviesApi";
import * as mainApi  from '../../utils/MainApi';

import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";

function Movies({ searchValue, search, handleSearchButton, setSearch, filteredMovies, handlelikeClick, savedMovies, handleDeleteClick, setCheckbox,
  loggedIn, setLoggedIn, checkbox, handleCheckbox, movies, setErrors, errors, setInPreloader}) {

    React.useEffect(() => {

    })

  return (
    <>
      <SearchForm errors={errors} setErrors={setErrors} movies={movies} setSearch={setSearch} searchValue={searchValue} setCheckbox={setCheckbox} handleSearchButton={handleSearchButton} checkbox={checkbox} search={search} handleCheckbox={handleCheckbox}/>
      {!loggedIn ? (

      <Preloader/>
      ) : ( <MoviesCardList movies={filteredMovies} handlelikeClick={handlelikeClick} 
        handleDeleteClick={handleDeleteClick} savedMovies={savedMovies}
        />)   }
    </>
  );
}

export default Movies;
