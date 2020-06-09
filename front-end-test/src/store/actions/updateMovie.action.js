import {
  ADD_MOVIE, MOVIE_WATCHED, EDIT_MOVIE_NAME, DELETE_MOVIE,
} from '../types/movies.types';
import LOADING from '../types/loading.types';
import history from '../../utils/history';

const delayLoadingTime = 1000;

// Add promises and services para simular async

const dispatchLoadingChanges = (isLoading) => ({ type: LOADING, payload: isLoading });
const dispatchNewMovie = (movie) => ({ type: ADD_MOVIE, payload: movie });
const dispatchDeleteMovie = (movieID) => ({ type: DELETE_MOVIE, payload: movieID });
const dispatchMovieMovie = (movieID) => ({ type: MOVIE_WATCHED, payload: movieID });
const dispatchEditMovieName = (payload) => ({ type: EDIT_MOVIE_NAME, payload });

const saveMovie = (movie) => (dispatch) => {
  dispatch(dispatchLoadingChanges(true));
  setTimeout(() => {
    dispatch(dispatchNewMovie(movie));
    dispatch(dispatchLoadingChanges(false));
    history.push('/');
  }, delayLoadingTime);
};

const deleteMovie = (movieID) => (dispatch) => {
  dispatch(dispatchLoadingChanges(true));
  setTimeout(() => {
    dispatch(dispatchDeleteMovie(movieID));
    dispatch(dispatchLoadingChanges(false));
  }, delayLoadingTime);
};

const movieWatched = (movieID) => (dispatch) => {
  dispatch(dispatchLoadingChanges(true));
  setTimeout(() => {
    dispatch(dispatchMovieMovie(movieID));
    dispatch(dispatchLoadingChanges(false));
  }, delayLoadingTime);
};

const editMovieTitle = (movieID, newTitle) => (dispatch) => {
  dispatch(dispatchLoadingChanges(true));
  setTimeout(() => {
    dispatch(dispatchEditMovieName({ id: movieID, title: newTitle }));
    dispatch(dispatchLoadingChanges(false));
  }, delayLoadingTime);
};


export {
  saveMovie, movieWatched, editMovieTitle, deleteMovie,
};
