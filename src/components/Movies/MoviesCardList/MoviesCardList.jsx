import React from "react";

import MoviesCard from '../../Movies/MoviesCard/MoviesCard';
import More from "../More/More";
import './MoviesCardList.css';
import {useMediaQuery} from '../../hooks/useMediaQuery';

function MoviesCardList({ movies, handlelikeClick}) {

  const LG_ROW_CARD_COUNT = 3;
  const MD_ROW_CARD_COUNT = 2;
  const SM_ROW_CARD_COUNT = 2;

  const LG_INITIAL_CARD_COUNT = 12;
  const MD_INITIAL_CARD_COUNT = 8;
  const SM_INITIAL_CARD_COUNT = 5;
    
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const cardColumnCount = isDesktop
    ? LG_ROW_CARD_COUNT
    : isTablet
    ? MD_ROW_CARD_COUNT
    : SM_ROW_CARD_COUNT;

  const initialCardCount = isDesktop
    ? LG_INITIAL_CARD_COUNT
    : isTablet
    ? MD_INITIAL_CARD_COUNT
    : SM_INITIAL_CARD_COUNT;

  const [visibleCardCount, setVisibleCardCount] = React.useState(
    initialCardCount
  );

  const roundedVisibleCardCount =
    Math.floor(visibleCardCount / cardColumnCount) * cardColumnCount;

    const handleClick = () => {
      calculateCardCount();
    };
  
    const calculateCardCount = () => {
      if (isDesktop) {
        return setVisibleCardCount(visibleCardCount + LG_ROW_CARD_COUNT);
      }
  
      if (isTablet) {
        return setVisibleCardCount(visibleCardCount + MD_ROW_CARD_COUNT);
      }
  
      setVisibleCardCount(visibleCardCount + SM_ROW_CARD_COUNT);
    };

  return (
    <>
      <ul className='movies'>

        {movies.map((movie) => (
        <MoviesCard
        movie={movie} key={movie.id}  handlelikeClick={handlelikeClick}
        />
      ))}
      
{/* 
        {movies.length === 0 ? (
          <p className="movies__text"> Фильмы по запросу не найдены</p>
        ) : (
          movies?.slice(0, roundedVisibleCardCount).map((movie) => (
          <MoviesCard
          movie={movie} key={movie.id}  handlelikeClick={handlelikeClick}
          />
        ))
        )
        } */}
      </ul>
      {movies.length === 0 ? (<p className="movies__text"> Фильмы по запросу не найдены</p>) :
      (<More onClick={handleClick}/>) 
      }
      
    </>
  );
}

export default MoviesCardList;
