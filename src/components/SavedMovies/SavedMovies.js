import React from "react";
import Preloader from "../Movies/Preloader/Preloader";

import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies({ errors, searchLength, setErrors, setSearch, savedMovies, handlelikeClick, handleDeleteClick, setCheckbox, loggedIn }) {

  const [searchSavedMovies, setSearchSavedMovies] = React.useState('');
  const [checkboxSavedMovies, setCheckboxSavedMovies] = React.useState(false);
  const [ filteredSavedMovies, setFilteredSavedMovies ] = React.useState([]); // отфильрованные фильмы
// //фильтр по имени сохраненных фильмов
const handleSearchSavedMovies = () => {
  let filtered = savedMovies;
  if (searchSavedMovies) {
  const s = searchSavedMovies.toLowerCase();
  filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
  }  
  setFilteredSavedMovies(filtered);  
  };
  
  // чек бокс coxраненных фильмов
  const handleCheckboxSavedMovies = () => {
  if (checkboxSavedMovies && filteredSavedMovies) {
  let filtered = filteredSavedMovies;
    filtered = filtered.filter(n => n.duration < 40);
    setFilteredSavedMovies(filtered);
    console.log(filteredSavedMovies, 'filteredSavedMovies 1');
  } else {
    if (savedMovies) {
      let filtered = savedMovies;
      const s = searchSavedMovies.toLowerCase();
      filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
      setFilteredSavedMovies(filtered);
      console.log(filteredSavedMovies, 'filteredSavedMovies 2');
    }
  }  
  }
  
  // чек бокс
  React.useEffect(() => {
  handleCheckboxSavedMovies();
  handleSearchSavedMovies();
  //setFilteredSavedMovies(savedMovies);
  console.log(filteredSavedMovies, 'handleSearchSavedMovies useEffect');
  }, [ checkboxSavedMovies, savedMovies ])

  
  React.useEffect(() => {
    let filtered = filteredSavedMovies;
    if (filteredSavedMovies) {
      if (searchSavedMovies) {
        const s = searchSavedMovies.toLowerCase();
        filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
        setFilteredSavedMovies(filtered);
        console.log(filteredSavedMovies, 'handleSearchSavedMovies filteredSavedMovies 1');
        }
  
    if (checkboxSavedMovies) {
        filtered = filtered.filter(n => n.duration < 40);
        setFilteredSavedMovies(filtered);
        console.log(filteredSavedMovies, 'handleSearchSavedMovies filteredSavedMovies 12');
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
        console.log(filteredSavedMovies, 'handleSearchSavedMovies filteredSavedMovies 21');
        }
  
    if (checkboxSavedMovies) {
        filtered = filtered.filter(n => n.duration < 40);
        setFilteredSavedMovies(filtered);
        console.log(filteredSavedMovies, 'handleSearchSavedMovies filteredSavedMovies 22');
        }
    }
  
  }, [ checkboxSavedMovies, savedMovies ])


  
  // React.useEffect(() => {
  //   //handleSearchSavedMovies();
  //   setFilteredSavedMovies(savedMovies);
  //   //setCheckboxSavedMovies(false);
  //   console.log(checkboxSavedMovies, 'checkboxSavedMovies SavedMovies');
  //   }, [ savedMovies ])


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
