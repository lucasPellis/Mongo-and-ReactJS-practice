/* eslint-disable react/prop-types */
import React from 'react';
import MovieCard from '../../../UI/movie-card/movieCard.component';

// TODO Sort by watched and createdate
const sortMoviesByWatchedAndChecked = (movies) => movies;

const MoviesWrapper = (props) => {
  const {
    movies, deleteClick, editClick, watchedClick,
  } = props;

  return movies.length > 0 ? sortMoviesByWatchedAndChecked(movies).map((movie) => (
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

export default MoviesWrapper;