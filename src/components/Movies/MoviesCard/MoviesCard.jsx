
import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie, handlelikeClick, savedMovies, handleDeleteClick }) {
  const URL = 'https://api.nomoreparties.co/';

  let {pathname} = useLocation();

  // const isLiked = savedMovies
  // ? savedMovies.some((item) => item.movieId === movie.id)
  // : false;

  const isLiked = savedMovies.some((item) => item.movieId === movie.id);
  //console.log(isLiked, 'isLiked card')

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    //const isLiked = savedMovies.some(item => item.movieId === movie.id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `movies-list__button-save ${
      isLiked && "movies-list__button-save__activ"
    }`;

  // console.log(isLiked, 'isLiked ')
  // console.log(savedMovies, 'savedMovies movies card')

  //формат времени
  function formatTime(time) {
    const min = time % 60;
    const hour = Math.floor(time / 60);
    return hour ? `${hour}ч ${min}м` : `${min}м`;
  };

  const handleLike = () => {
    handlelikeClick(movie);
  };

  const handleDelete = () => {
    handleDeleteClick(movie);
  };

    return (
    <li className="movies-list">
      {pathname === '/saved-movies' ? (
        <>
          {/* <a className="movies-list__foto" target="_blank" href={movie.trailerLink}> */}
            <img className="movies-list__foto" src={movie.image} alt={movie.nameRU} />
          {/* </a> */}
          <button
            className='movies-list__button-close'
            onClick={handleDelete}
          ></button>
          </>
        ) : (
          <>
            <img className="movies-list__foto" src={URL + movie.image.url} alt={movie.nameRU} />
          <button
          className={cardLikeButtonClassName}
            // className={
            //   isLiked
            //     ? 'movies-list__button-save__activ'
            //     : 'movies-list__button-save'
            // }
            onClick={handleLike}
            type='button'
          ></button>
          </>
        )}
      <div className='movies-list__container' >
          <a className="movies-list__link" target="_blank" href={movie.trailerLink}>
          <h3 className='movies-list__text'>{movie.nameRU}</h3>
          </a>        
        <h3 className='movies-list__time'>{formatTime(movie.duration)}</h3>
      </div>
    </li>
  );
}

export default MoviesCard;

