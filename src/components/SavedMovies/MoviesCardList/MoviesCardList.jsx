import MoviesCard from '../../SavedMovies/MoviesCard/MoviesCard';
import More from '../More/More';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <>
      <ul className='movies'>
          <MoviesCard />
          {/* {cards.map(() => (
              <MoviesCard />
          ))} */}
      </ul>
      <More />
    </>
  );
}

export default MoviesCardList;
