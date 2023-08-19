import MoviesCard from '../../SavedMovies/MoviesCard/MoviesCard';
import More from '../../Movies/More/More';
import '../../Movies/MoviesCardList/MoviesCardList.css';

function MoviesCardList() {
  return (
    <>
      <ul className='movies'>
          <MoviesCard />
      </ul>
      <More />
    </>
  );
}

export default MoviesCardList;
