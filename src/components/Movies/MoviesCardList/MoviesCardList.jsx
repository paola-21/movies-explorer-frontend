import MoviesCard from '../../Movies/MoviesCard/MoviesCard';
import './MoviesCardList.css';
import More from '../More/More';

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