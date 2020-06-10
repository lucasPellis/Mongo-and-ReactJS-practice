/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
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
  const sortedMovies = movies.sort((a) => (a.id) * (a.watched ? 1 : -1));
  return sortedMovies;
};

const FilteredMoviesListWrapper = (props) => {
  const {
    movies, filterString, filterGenre, deleteClick, editClick, watchedClick,
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

FilteredMoviesListWrapper.propTypes = {
  movies: PropTypes.array,
  filterString: PropTypes.string,
  filterGenre: PropTypes.string,
  deleteClick: PropTypes.any,
  editClick: PropTypes.any,
  watchedClick: PropTypes.any,
};

FilteredMoviesListWrapper.defaultProps = {
  movies: [],
  filterString: '',
  filterGenre: '',
  deleteClick: () => { console.log('delete without callback'); },
  editClick: () => { console.log('edit without callback'); },
  watchedClick: () => { console.log('watched without callback'); },
};


export default FilteredMoviesListWrapper;
