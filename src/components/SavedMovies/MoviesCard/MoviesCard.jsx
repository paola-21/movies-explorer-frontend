import './MoviesCard.css';
import Movies from '../../../images/movies/pic__COLOR_pic.png';
import Movies2 from '../../../images/movies/pic__COLOR_pic2.png';
import Movies3 from '../../../images/movies/pic__COLOR_pic3.png';

function MoviesCard() {
  return (
    <>
    <li className="movies-list">
      <img className="movies__foto" src={Movies} alt="фильм" />
      <button className='movies__button-save'></button>
      <div className='movies-list__container'>
        <h3 className='movies_text'>33 слова о дизайне</h3>
        <h3 className='movies_time'>1ч 17м</h3>
      </div>
    </li>
    <li className="movies-list">
    <img className="movies__foto" src={Movies2} alt="фильм" />
    <button className='movies__button-save'></button>
    <div className='movies-list__container'>
        <h3 className='movies_text'>Киноальманах «100 лет дизайна»</h3>
        <h3 className='movies_time'>1ч 17м</h3>
    </div>
    </li>
    {/* <li className="movies-list">
    <img className="movies__foto" src={Movies3} alt="фильм" />
    <button className='movies__button-save'></button>
    <div className='movies-list__container'>
        <h3 className='movies_text'>В погоне за Бенкси</h3>
        <h3 className='movies_time'>1ч 17м</h3>
    </div>
    </li> */}
    </>
  );
}

export default MoviesCard;
