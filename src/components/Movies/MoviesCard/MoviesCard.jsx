import './MoviesCard.css';
import React from 'react';

function MoviesCard({ movie }) {
  const URL = 'https://api.nomoreparties.co/';

  //формат времени
  function formatTime(time) {
    const min = time % 60;
    const hour = Math.floor(time / 60);
    return hour ? `${hour}ч ${min}м` : `${min}м`;
  };

    return (
    <li className="movies-list">
      <a href={movie.trailerLink}>
        <img className="movies-list__foto" src={URL + movie.image.url} alt={movie.nameRU} />
      </a>
      <button className='movies-list__button-save'></button>
      <div className='movies-list__container'>
        <h3 className='movies-list__text'>{movie.nameRU}</h3>
        <h3 className='movies-list__time'>{formatTime(movie.duration)}</h3>
      </div>
    </li>
  );
}

export default MoviesCard;
