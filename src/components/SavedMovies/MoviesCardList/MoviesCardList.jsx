import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../../Movies/More/More';
import '../../Movies/MoviesCardList/MoviesCardList.css';

function MoviesCardList({movies}) {
  return (
    <>
      <ul className='movies'>
        {/* {movies.map((movie) => ( */}
            <MoviesCard
            // movie={movie} key={movie._id}
            />
          {/* ))} */}
      </ul>
      <More />
    </>
  );
}

export default MoviesCardList;
