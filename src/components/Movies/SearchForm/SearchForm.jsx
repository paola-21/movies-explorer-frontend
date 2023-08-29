import React from 'react';
import './SearchForm.css';
import Search from '../../../images/search.svg';
import { useLocation } from 'react-router-dom';



function SearchForm({ search, setSearch, setCheckbox, handleSearchButton, handleSearchSavedMoviesButton, checkbox }) {
  // const {values, handleChange, errors, isValid } = useFormAndValidation()


  let {pathname} = useLocation();
  // поиск по инпуту
  const handleSearchInput = (e) => {
    setSearch(e.target.value)
  };

  const handleChangeChecked = (e) => {
    setCheckbox(e.target.checked)
    console.log(e.target.checked);
  }


 // onChange={e => setCheckbox(e.target.checked)}
 console.log(search, 'search');
  return (
    <div className="search">
      <div className="search">
      {pathname === '/movies' ? (
        <form className='search__movies'>
          <div className='search__container-input'>
              <input type="text" placeholder="Фильм" value={search} className='search__input' onChange={handleSearchInput}/>
              <button className='search__button' disabled={!search ? true : false} onClick={handleSearchButton}>
                <img src={Search} alt="найти" className='search__image' />
              </button>
          </div>
          <div className='search__container-button'>
              <label>
                  <input className='search__invisible-checkbox' type="checkbox" name="myCheckbox" checked={checkbox} onChange={(e) => handleChangeChecked(e)}/>
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
              <input type="text" placeholder="Фильм" className='search__input' onChange={handleSearchInput}/>
              <button className='search__button'> 
                <img src={Search} alt="найти" className='search__image' onClick={handleSearchSavedMoviesButton}/>
              </button>
          </div>
          <div className='search__container-button'>
              <label>
                  <input className='search__invisible-checkbox' type="checkbox" name="myCheckbox" onChange={(e) => handleChangeChecked(e)}/>
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