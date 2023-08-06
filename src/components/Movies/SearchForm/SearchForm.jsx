import './SearchForm.css';
import Search from '../../../images/search.svg';

function SearchForm() {
  return (
    <div className="search">
        <form className='search__movies'>
            <div className='search__container-input'>
                <input type="text" placeholder="Фильм" className='search__input' />
                <button className='search__button'> 
                    <img src={Search} alt="найти" className='search__image' />
                </button>
            </div>
            <div className='search__container-button'>
                <label>
                    <input className='search__invisible-checkbox' type="checkbox" name="myCheckbox"/>
                    <span class="search__visible-checkbox">
                    </span> 
                </label>
                <h3 className='search__text'>
                Короткометражки
                </h3>
            </div>

            
        </form>
    </div>
  );
}

export default SearchForm;
