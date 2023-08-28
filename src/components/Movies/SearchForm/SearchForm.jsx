import React from 'react';
import './SearchForm.css';
import Search from '../../../images/search.svg';
import { useLocation } from 'react-router-dom';



function SearchForm({ setSearch, handleCheckbox, setCheckbox, handleSearchButton, handleSearchSavedMoviesButton, checkbox }) {

  let {pathname} = useLocation();
  // поиск по инпуту
  const handleSearchInput = (e) => {
    setSearch(e.target.value)
  };

  const handleChange = (e) => {
    setCheckbox(e.target.checked)
    // let isChecked = e.target.checked;
    // handleCheckbox(isChecked);
    // // do whatever you want with isChecked value
    console.log(e.target.checked);
  }

  const checkboxValue = checkbox ? 'true' : 'false'

  // const handleChange = (e) => {
  //   handleCheckbox(e);
  // };

 // onChange={e => setCheckbox(e.target.checked)}

  return (
    <div className="search">
      <div className="search">
      {pathname === '/movies' ? (
        <form className='search__movies'>
          <div className='search__container-input'>
              <input type="text" placeholder="Фильм" className='search__input' onChange={handleSearchInput}/>
              <button className='search__button'> 
                <img src={Search} alt="найти" className='search__image' onClick={handleSearchButton}/>
              </button>
          </div>
          <div className='search__container-button'>
              <label>
                  <input className='search__invisible-checkbox' type="checkbox" name="myCheckbox" checked={checkbox} onChange={(e) => handleChange(e)}/>
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
                  <input className='search__invisible-checkbox' type="checkbox" name="myCheckbox" onChange={handleCheckbox}/>
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