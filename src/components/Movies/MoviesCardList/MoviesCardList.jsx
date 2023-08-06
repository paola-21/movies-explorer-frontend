import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <ul className='movies'>
        <MoviesCard />
        {/* {cards.map(() => (
            <MoviesCard />
        ))} */}
    </ul>
  );
}

export default MoviesCardList;
