import './MoviesCard.css';
import Movies from '../../../images/movies/pic__COLOR_pic.png';
import Movies2 from '../../../images/movies/pic__COLOR_pic2.png';
import Movies3 from '../../../images/movies/pic__COLOR_pic3.png';
import Movies4 from '../../../images/movies/pic__COLOR_pic4.png';
import Movies5 from '../../../images/movies/pic__COLOR_pic5.png';
import Movies6 from '../../../images/movies/pic__COLOR_pic6.png';
import Movies7 from '../../../images/movies/pic__COLOR_pic7.png';
import Movies8 from '../../../images/movies/pic__COLOR_pic8.png';
import Movies9 from '../../../images/movies/pic__COLOR_pic9.png';
import Movies10 from '../../../images/movies/pic__COLOR_pic10.png';
import Movies11 from '../../../images/movies/pic__COLOR_pic11.png';
import Movies12 from '../../../images/movies/pic__COLOR_pic12.png';
import Save from '../../../images/save.svg';

function MoviesCard() {
  return (
    <>
    <li className="movies-list">
      <img className="movies-list__foto" src={Movies} alt="фильм" />
      <button className='movies-list__button-save'></button>
      <div className='movies-list__container'>
        <h3 className='movies-list__text'>33 слова о дизайне</h3>
        <h3 className='movies-list__time'>1ч 17м</h3>
      </div>
    </li>
    <li className="movies-list">
      <img className="movies-list__foto" src={Movies2} alt="фильм" />
      <button className='movies-list__button-save__activ'></button>
      <div className='movies-list__container'>
        <h3 className='movies-list__text'>Киноальманах «100 лет дизайна»</h3>
        <h3 className='movies-list__time'>1ч 17м</h3>
      </div>
    </li>
    <li className="movies-list">
      <img className="movies-list__foto" src={Movies3} alt="фильм" />
      <button className='movies-list__button-save'></button>
      <div className='movies-list__container'>
        <h3 className='movies-list__text'>В погоне за Бенкси</h3>
        <h3 className='movies-list__time'>1ч 17м</h3>
      </div>
    </li>
    <li className="movies-list">
      <img className="movies-list__foto" src={Movies4} alt="фильм" />
      <button className='movies-list__button-save__activ'></button>
      <div className='movies-list__container'>
        <h3 className='movies-list__text'>Баския: Взрыв реальности</h3>
        <h3 className='movies-list__time'>1ч 17м</h3>
      </div>
    </li>
    <li className="movies-list">
      <img className="movies-list__foto" src={Movies5} alt="фильм" />
      <button className='movies-list__button-save'></button>
      <div className='movies-list__container'>
        <h3 className='movies-list__text'>Бег это свобода</h3>
        <h3 className='movies-list__time'>1ч 17м</h3>
      </div>
    </li>


    <li className="movies-list">
      <img className="movies-list__foto" src={Movies6} alt="фильм" />
      <button className='movies-list__button-save'></button>
      <div className='movies-list__container'>
        <h3 className='movies-list__text'>Книготорговцы</h3>
        <h3 className='movies-list__time'>1ч 17м</h3>
      </div>
    </li>
    <li className="movies-list">
      <img className="movies-list__foto" src={Movies7} alt="фильм" />
      <button className='movies-list__button-save'></button>
      <div className='movies-list__container'>
        <h3 className='movies-list__text'>Когда я думаю о Германии ночью</h3>
        <h3 className='movies-list__time'>1ч 17м</h3>
      </div>
    </li>
    <li className="movies-list">
      <img className="movies-list__foto" src={Movies8} alt="фильм" />
      <button className='movies-list__button-save'></button>
      <div className='movies-list__container'>
        <h3 className='movies-list__text'>Gimme Danger: История Игги и The Stooges</h3>
        <h3 className='movies-list__time'>1ч 17м</h3>
      </div>
    </li>

    {/* <li className="movies-list">
      <img className="movies-list__foto" src={Movies9} alt="фильм" />
      <button className='movies-list__button-save'></button>
      <div className='movies-list__container'>
        <h3 className='movies-list__text'>Дженис: Маленькая девочка грустит</h3>
        <h3 className='movies-list__time'>1ч 17м</h3>
      </div>
    </li>
    <li className="movies-list">
      <img className="movies-list__foto" src={Movies10} alt="фильм" />
      <button className='movies-list__button-save'></button>
      <div className='movies-list__container'>
        <h3 className='movies-list__text'>Соберись перед прыжком</h3>
        <h3 className='movies-list__time'>1ч 17м</h3>
      </div>
    </li>
    <li className="movies-list">
      <img className="movies-list__foto" src={Movies11} alt="фильм" />
      <button className='movies-list__button-save'></button>
      <div className='movies-list__container'>
        <h3 className='movies-list__text'>Пи Джей Харви: A dog called money</h3>
        <h3 className='movies-list__time'>1ч 17м</h3>
      </div>
    </li>
    <li className="movies-list">
      <img className="movies-list__foto" src={Movies12} alt="фильм" />
      <button className='movies-list__button-save'></button>
      <div className='movies-list__container'>
        <h3 className='movies-list__text'>По волнам: Искусство звука в кино</h3>
        <h3 className='movies-list__time'>1ч 17м</h3>
      </div>
    </li> */}
    </>
  );
}

export default MoviesCard;
