/* eslint-disable max-len */
import {
  ADD_MOVIE, MOVIE_WATCHED, EDIT_MOVIE_NAME, DELETE_MOVIE, GET_ALL_MOVIES,
} from '../types/movies.types';

const moviesReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_ALL_MOVIES:
      return payload;
    case ADD_MOVIE:
      return state.concat([payload]);
    case MOVIE_WATCHED:
      return state.map((movie) => (movie.id !== payload ? movie : { ...movie, watched: !movie.watched }));
    case EDIT_MOVIE_NAME:
      return state.map((movie) => (movie.id !== payload.id ? movie : { ...movie, title: payload.title }));
    case DELETE_MOVIE:
      return state.filter((movie) => movie.id !== payload);
    default:
      return state;
  }
};

export default moviesReducer;
