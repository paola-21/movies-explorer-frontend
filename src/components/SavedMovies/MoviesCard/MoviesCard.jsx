import './MoviesCard.css';
import Movies from '../../../images/movies/pic__COLOR_pic.png';
import Movies2 from '../../../images/movies/pic__COLOR_pic2.png';
import Movies3 from '../../../images/movies/pic__COLOR_pic3.png';

function MoviesCard() {
  return (
    <li className="movies-list">
      <img className="movies-list__foto" src={Movies} alt="фильм" />
      <button className='movies-list__button-close'></button>
      <div className='movies-list__container'>
        <h3 className='movies-list__text'></h3>
        <h3 className='movies-list__time'></h3>
      </div>
    </li>
  );
}

export default MoviesCard;
