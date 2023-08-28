
import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie, handlelikeClick, savedMovies, handleDeleteClick}) {
  const URL = 'https://api.nomoreparties.co/';

  let {pathname} = useLocation();

  const isLiked = savedMovies
  ? savedMovies.some((item) => item.movieId === movie.id)
  : false;

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
      <a href={movie.trailerLink}>
        <img className="movies-list__foto" src={URL + movie.image.url} alt={movie.nameRU} />
      </a>
      {pathname === '/saved-movies' ? (
          <button
            className='movies-list__button-close'
            onClick={handleDelete}
          ></button>
        ) : (
          <button
            className={
              isLiked
                ? 'movies-list__button-save__activ'
                : 'movies-list__button-save'
            }
            onClick={handleLike}
            type='button'
          ></button>
        )}
      <div className='movies-list__container'>
        <h3 className='movies-list__text'>{movie.nameRU}</h3>
        <h3 className='movies-list__time'>{formatTime(movie.duration)}</h3>
      </div>
    </li>
  );
}

export default MoviesCard;
