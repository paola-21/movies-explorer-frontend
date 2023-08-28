import React from 'react';
import './SearchForm.css';
import Search from '../../../images/search.svg';
import { useLocation } from 'react-router-dom';



function SearchForm({ setSearch, setCheckbox, handleSearchButton, handleSearchSavedMoviesButton }) {

  let {pathname} = useLocation();
  // поиск по инпуту
  const handleSearchInput = (evt) => {
    setSearch(evt.target.value)
  };

  return (
    <div className="search">
<div className="search">
<form className='search__movies'>
    <div className='search__container-input'>
        <input type="text" placeholder="Фильм" className='search__input' onChange={handleSearchInput}/>
        {pathname === '/saved-movies' ? (
        <button className='search__button'> 
        <img src={Search} alt="найти" className='search__image' onClick={handleSearchSavedMoviesButton}/>
        </button>
        ) : (
          <button className='search__button'> 
          <img src={Search} alt="найти" className='search__image' onClick={handleSearchButton }/>
      </button>
        )}
    </div>
    <div className='search__container-button'>
        <label>
            <input className='search__invisible-checkbox' type="checkbox" name="myCheckbox" onChange={e => setCheckbox(e.target.checked)}/>
            <span className="search__visible-checkbox">
            </span> 
        </label>
        <h3 className='search__text'>
        Короткометражки
        </h3>
    </div>          
</form>
</div>

    </div>
  );
}

export default SearchForm;