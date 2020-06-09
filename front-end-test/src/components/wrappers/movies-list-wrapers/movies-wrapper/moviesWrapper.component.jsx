/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import MovieCard from '../../../UI/movie-card/movieCard.component';


const FilterListByTitle = (movies, title) => {
  return (!title ? movies : movies.filter((movie) => movie.title.toLowerCase().includes(title.toLowerCase())));
};

// diff date y si la miro multiplcar por 10000
// Improve sort algoritm, now is O(n2)
const sortMoviesByWatchedAndChecked = (movies) => movies;
// const moviesByDate = movies.sort((a, b) => a.date - b.date);

const MoviesWrapper = (props) => {
  const {
    movies, deleteClick, editClick, watchedClick, filterString,
  } = props;

  return FilterListByTitle(movies, filterString).length > 0 ? sortMoviesByWatchedAndChecked(FilterListByTitle(movies, filterString)).map((movie) => (
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
