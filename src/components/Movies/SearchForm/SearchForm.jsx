import React from 'react';
import './SearchForm.css';
import Search from '../../../images/search.svg';
import { useLocation } from 'react-router-dom';
import {useMediaQuery} from '../../hooks/useMediaQuery';

function SearchForm({setCheckboxSavedMovies, checkboxSavedMovies, handleCheckboxSavedMovies, search, setSearch, searchSavedMovies, searchValue, setSearchSavedMovies, setCheckbox, handleSearchButton, handleSearchSavedMovies, checkbox, handleCheckbox, movies }) {

  const LG_ROW_CARD_COUNT = 3;
  const MD_ROW_CARD_COUNT = 4;
  const SM_ROW_CARD_COUNT = 2;

  const LG_INITIAL_CARD_COUNT = 12;
  const MD_INITIAL_CARD_COUNT = 8;
  const SM_INITIAL_CARD_COUNT = 5;
    
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const cardColumnCount = isDesktop
    ? LG_ROW_CARD_COUNT
    : isTablet
    ? MD_ROW_CARD_COUNT
    : SM_ROW_CARD_COUNT;

  const initialCardCount = isDesktop
    ? LG_INITIAL_CARD_COUNT
    : isTablet
    ? MD_INITIAL_CARD_COUNT
    : SM_INITIAL_CARD_COUNT;

  const [visibleCardCount, setVisibleCardCount] = React.useState(
    initialCardCount
  );
  
  const roundedVisibleCardCount =
    Math.floor(visibleCardCount / cardColumnCount) * cardColumnCount;

    const handleClick = () => {
      calculateCardCount();
    };
  
    const calculateCardCount = () => {
      if (isDesktop) {
        return setVisibleCardCount(visibleCardCount + LG_ROW_CARD_COUNT);
      }
  
      if (isTablet) {
        return setVisibleCardCount(visibleCardCount + MD_ROW_CARD_COUNT);
      }
  
      setVisibleCardCount(visibleCardCount + SM_ROW_CARD_COUNT);
    };

  const [errorss, setErrorss] = React.useState('');
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

  const handleSearchMovies = (e) => {
    
    e.preventDefault();
    setVisibleCardCount(initialCardCount)
    handleSearchButton(movies);
    if(search ==='' || !search || search === undefined) {
      setErrorss(true);
    } else {
      setErrorss(false);
    }
  }


  const handleSearchSavedMoviesSubmit = (e) => {
    e.preventDefault();
    handleSearchSavedMovies();
    if(searchSavedMovies ==='' || !searchSavedMovies || searchSavedMovies === undefined) {
      setErrorss(true);
    } else {
      setErrorss(false);
    }
  }

  return (
    <div className="search">
      <div className="search">
      {pathname === '/movies' ? (
        <form className='search__movies'>
          <div className='search__container-input'>
              <input type="text" name="text" placeholder="Фильм" className='search__input' onChange={handleSearchInput} value={search}/>
              <button className='search__button' onClick={handleSearchMovies}> 
                <img src={Search} alt="найти" className='search__image' />
              </button>
              <span className='register__input-error'>{errorss ? 'Нужно ввести ключевое слово' : ''}</span>
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
              <button className='search__button' onClick={handleSearchSavedMoviesSubmit}> 
                <img src={Search} alt="найти" className='search__image'/>
              </button>
              <span className='register__input-error'>{errorss ? 'Нужно ввести ключевое слово' : ''}</span>
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