import React from "react";

import { api } from "../../utils/MoviesApi";
import { apiMain } from '../../utils/MainApi';

import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import More from "./More/More";
import { useMediaQuery } from "../hooks/useMediaQuery";

function Movies() {

    const [movies, setMovies] = React.useState(null);
    const [search, setSearch] = React.useState('');
    const [checkbox, setCheckbox] = React.useState(false);
    const [ filteredMovies, setFilteredMovies ] = React.useState([]);

    //загрузка всех фильмов с сервера
      React.useEffect(() => {
      api
        .getMovies()
        .then((data) => {
          setMovies(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);


    //фильтр по имени и чекбокс, 
    const handleSearchButton = (e) => {
            e.preventDefault();

        let filtered = movies;

        if (search) {
            const s = search.toLowerCase();
            filtered = filtered.filter(n => n.nameRU.toLowerCase().includes(s));
            }

        if (checkbox) {
            filtered = filtered.filter(n => n.duration < 40);
            }
            setFilteredMovies(filtered);
    };

    const [savedMovies, setSavedMovies] = React.useState(null);

    // const handlelikeClick = (movie) => {
    //   const isSevedMovies = savedMovies.some((item) => item.movieId === movie.id);
    //   if (!isSevedMovies) {
    //     apiMain.saveMovie ({
    //       country: movie.country,
    //       director: movie.director,
    //       duration: movie.duration,
    //       year: movie.year,
    //       description: movie.description,
    //       image: movie.image,
    //       trailerLink: movie.trailerLink,
    //       thumbnail: movie.image,
    //       movieId: movie.id,
    //       nameRU: movie.nameRU,
    //       nameEN: movie.nameEN,
    //     })
    //     .then((savedMovie) => setSavedMovies([savedMovie, ...setSavedMovies]))
    //     .catch((err) => { console.log(err)});
    //   } else {
    //     const isSevedMovieId = savedMovies.find((item) => item.movieId === movie.id)._id;
    //     api
    //     .DeleteMovie(isSevedMovieId)
    //     .then(() => setSavedMovies((state) => 
    //     state.filter((item) => item.movieId === movie.id)
    //     ))
    //     .catch((err) => { console.log(err)});
    //   }
    // };

    


  return (
    <>
      <SearchForm setSearch={setSearch} setCheckbox={setCheckbox} handleSearchButton={handleSearchButton}/>
      <MoviesCardList movies={filteredMovies}/>
    </>
  );
}

export default Movies;
