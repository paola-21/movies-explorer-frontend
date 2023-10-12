import React from "react";
import Preloader from "../Movies/Preloader/Preloader";

import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies({ errors, setErrors, setSearch, savedMovies, handlelikeClick, handleDeleteClick, setCheckbox, loggedIn }) {

  const [searchSavedMovies, setSearchSavedMovies] = React.useState('');
  const [checkboxSavedMovies, setCheckboxSavedMovies] = React.useState(false);
  const [ filteredSavedMovies, setFilteredSavedMovies ] = React.useState([]);
  const [ searchLength, SetSearchLength] = React.useState(false);
// //фильтр по имени сохраненных фильмов
const handleSearchSavedMovies = () => {
  let filtered = savedMovies;
  if (searchSavedMovies) {
  const s = searchSavedMovies.toLowerCase();
  filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
  setFilteredSavedMovies(filtered);
  if (filtered.length === 0) {
    SetSearchLength(true)
  } else {
    SetSearchLength(false)
  } 
  } 

  };
  
  // чек бокс coxраненных фильмов
  const handleCheckboxSavedMovies = () => {
  if (checkboxSavedMovies && filteredSavedMovies) {
  let filtered = filteredSavedMovies;
    filtered = filtered.filter(n => n.duration < 40);
    setFilteredSavedMovies(filtered);
  } else {
    if (savedMovies) {
      let filtered = savedMovies;
      const s = searchSavedMovies.toLowerCase();
      filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
      setFilteredSavedMovies(filtered);
    }
  }  
  }
  
  // чек бокс
  React.useEffect(() => {
  handleCheckboxSavedMovies();
  handleSearchSavedMovies();
  }, [ checkboxSavedMovies, savedMovies ])

  
  React.useEffect(() => {
    let filtered = filteredSavedMovies;
    if (filteredSavedMovies) {
      if (searchSavedMovies) {
        const s = searchSavedMovies.toLowerCase();
        filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
        setFilteredSavedMovies(filtered);
        }
  
    if (checkboxSavedMovies) {
        filtered = filtered.filter(n => n.duration < 40);
        setFilteredSavedMovies(filtered);
        }
    }
  
  }, [ checkboxSavedMovies ])
  
  React.useEffect(() => {
    let filtered = savedMovies;
    if (savedMovies) {
      if (searchSavedMovies) {
        const s = searchSavedMovies.toLowerCase();
        filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
        setFilteredSavedMovies(filtered);
        }
  
    if (checkboxSavedMovies) {
        filtered = filtered.filter(n => n.duration < 40);
        setFilteredSavedMovies(filtered);
        }
    }
  
  }, [ checkboxSavedMovies, savedMovies ])

return (
    <>
        <SearchForm searchSavedMovies={searchSavedMovies} setErrors={setErrors} errors={errors} setCheckboxSavedMovies={setCheckboxSavedMovies} checkboxSavedMovies={checkboxSavedMovies} handleCheckboxSavedMovies={handleCheckboxSavedMovies} setSearch={setSearch} setSearchSavedMovies={setSearchSavedMovies} handleSearchSavedMovies={handleSearchSavedMovies} setCheckbox={setCheckbox} />
      {!loggedIn ? (
      <Preloader/>
      ) : ( <MoviesCardList searchLength={searchLength} movies={filteredSavedMovies} handlelikeClick={handlelikeClick} handleDeleteClick ={handleDeleteClick} filteredSavedMovies={filteredSavedMovies} savedMovies={savedMovies}/>)   }
    </>

  );
}

export default SavedMovies;
