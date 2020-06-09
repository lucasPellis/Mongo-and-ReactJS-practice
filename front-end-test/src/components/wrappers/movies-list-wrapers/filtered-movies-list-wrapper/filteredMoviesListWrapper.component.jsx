/* eslint-disable react/prop-types */
import React from 'react';
import MoviesWrapper from '../movies-wrapper/moviesWrapper.component';


const FilterListByTitle = (movies, titleText, genre) => {
  const filterByTitle = (movieTitle) => {
    const titleIncludesText = () => movieTitle.toLowerCase().includes(titleText.toLowerCase());

    return (!movieTitle || titleIncludesText(movieTitle));
  };

  const filterByGenre = (movieGenres) => {
    const includesGenre = () => (movieGenres.find((g) => g.toLowerCase() === genre.toLowerCase()));

    return (!genre || includesGenre());
  };

  return movies.filter((movie) => filterByTitle(movie.title) && filterByGenre(movie.genres));
};


const sortMoviesByWatchedAndChecked = (movies) => {
  const sortedMovies = movies.sort((a) => (a.id) * (a.watched ? -1 : 1));
  return sortedMovies;
};


const FilteredMoviesListWrapper = (props) => {
  const {
    movies, deleteClick, editClick, watchedClick, filterString, filterGenre,
  } = props;

  return (
    <MoviesWrapper
      movies={sortMoviesByWatchedAndChecked(FilterListByTitle(movies, filterString, filterGenre))}
      watchedClick={watchedClick}
      editClick={editClick}
      deleteClick={deleteClick}
    />
  );
};


export default FilteredMoviesListWrapper;
