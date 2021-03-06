import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../../../UI/movie-card/movieCard.component';

const MoviesWrapper = (props) => {
  const {
    movies, deleteClick, editClick, watchedClick,
  } = props;

  return movies.length > 0 ? movies.map((movie) => (
    <MovieCard
      key={movie.id}
      id={movie.id}
      title={movie.title}
      genres={movie.genres}
      watched={movie.watched}
      deleteClick={deleteClick}
      editClick={editClick}
      watchedClick={watchedClick}
    />
  ))
    : <div style={{ textAlign: 'center' }}><h4>There are no movies :(</h4></div>;
};

MoviesWrapper.propTypes = {
  movies: PropTypes.array,
  deleteClick: PropTypes.any,
  editClick: PropTypes.any,
  watchedClick: PropTypes.any,
};

MoviesWrapper.defaultProps = {
  movies: [],
  deleteClick: () => { console.log('delete without callback'); },
  editClick: () => { console.log('edit without callback'); },
  watchedClick: () => { console.log('watched without callback'); },
};

export default MoviesWrapper;
