import React from 'react';
import './SearchForm.css';
import Search from '../../../images/search.svg';
import { useLocation } from 'react-router-dom';
import useFormAndValidation from '../../hooks/useFormAndValidation';


function SearchForm({setCheckboxSavedMovies, checkboxSavedMovies, handleCheckboxSavedMovies, errors, setErrors, search, setSearch, searchValue, setSearchSavedMovies, setCheckbox, handleSearchButton, handleSearchSavedMoviesButton, checkbox, handleCheckbox, movies }) {

 let {pathname} = useLocation();
  // поиск по инпуту
  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  // поиск по инпуту
  const handleSearchInputSavedMovies = (e) => {
    //setSearchSavedMovies('');
    setSearchSavedMovies(e.target.value)
  };



  const handleChangeChecked = (e) => {
    setCheckbox(e.target.checked)
  }

  const handleChangeCheckedSavedMovies = (e) => {
    setCheckboxSavedMovies(e.target.checked)
  }

  console.log(handleChangeCheckedSavedMovies, 'handleChangeCheckedSavedMovies');

  console.log(checkboxSavedMovies, 'checkboxSavedMovies ')

  // disabled={!search ? true : false}

  return (
    <div className="search">
      <div className="search">
      {pathname === '/movies' ? (
        <form className='search__movies'>
          <div className='search__container-input'>
              <input type="text" name="text" placeholder="Фильм" className='search__input' onChange={handleSearchInput} value={search} />
              <button className='search__button' onClick={handleSearchButton}> 
                <img src={Search} alt="найти" className='search__image' />
              </button>
              <span className='register__input-error'>{errors ? 'Нужно ввести ключевое слово' : ''}</span>
          </div>
          <div className='search__container-button'>
              <label>
                  <input className='search__invisible-checkbox' type="checkbox" name="myCheckbox" checked={checkbox}  onClick={handleCheckbox} onChange={(e) => handleChangeChecked(e)}/>
                  <span className="search__visible-checkbox">
                  </span> 
              </label>
              <h3 className='search__text'>
              Короткометражки
              </h3>
          </div> 
      </form>) : (
          <form className='search__movies'>
          <div className='search__container-input'>
              <input type="text" placeholder="Фильм" className='search__input' onChange={handleSearchInputSavedMovies}/>
              <button className='search__button' onClick={handleSearchSavedMoviesButton}> 
                <img src={Search} alt="найти" className='search__image'/>
              </button>
          </div>
          <div className='search__container-button'>
              <label>
                  <input className='search__invisible-checkbox' type="checkbox" name="myCheckboxSavedMovies" checked={checkboxSavedMovies}  onClick={handleCheckboxSavedMovies} 
                  onChange={(e) => handleChangeCheckedSavedMovies(e)}/>
                  <span className="search__visible-checkbox">
                  </span> 
              </label>
              <h3 className='search__text'>
              Короткометражки
              </h3>
          </div>          
      </form>)}
  </div>
</div>

  );
}

export default SearchForm;