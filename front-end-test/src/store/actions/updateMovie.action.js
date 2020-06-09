import {
  ADD_MOVIE, MOVIE_WATCHED, EDIT_MOVIE_NAME, DELETE_MOVIE,
} from '../types/movies.types';
import LOADING from '../types/loading.types';
import history from '../../utils/history';

// API service
import {
  saveMovieAPI, deleteMovieAPI, movieWatchedAPI, editMovieTitleAPI,
} from '../../services/movies.service';


const dispatchLoadingChanges = (isLoading) => ({ type: LOADING, payload: isLoading });
const dispatchNewMovie = (movie) => ({ type: ADD_MOVIE, payload: movie });
const dispatchDeleteMovie = (movieID) => ({ type: DELETE_MOVIE, payload: movieID });
const dispatchMovieMovie = (movieID) => ({ type: MOVIE_WATCHED, payload: movieID });
const dispatchEditMovieName = (payload) => ({ type: EDIT_MOVIE_NAME, payload });

const saveMovie = (movie) => (dispatch) => {
  dispatch(dispatchLoadingChanges(true));
  saveMovieAPI(movie)
    .then((movieAPI) => {
      dispatch(dispatchNewMovie(movieAPI));
      dispatch(dispatchLoadingChanges(false));
      history.push('/');
    });
};

const deleteMovie = (movieID) => (dispatch) => {
  dispatch(dispatchLoadingChanges(true));
  deleteMovieAPI(movieID)
    .then((movieIDAPI) => {
      dispatch(dispatchDeleteMovie(movieIDAPI));
      dispatch(dispatchLoadingChanges(false));
    });
};

const movieWatched = (movieID) => (dispatch) => {
  dispatch(dispatchLoadingChanges(true));
  movieWatchedAPI(movieID)
    .then((movieIDAPI) => {
      dispatch(dispatchMovieMovie(movieIDAPI));
      dispatch(dispatchLoadingChanges(false));
    });
};

const editMovieTitle = (movieID, newTitle) => (dispatch) => {
  dispatch(dispatchLoadingChanges(true));
  editMovieTitleAPI(movieID, newTitle)
    .then((data) => {
      dispatch(dispatchEditMovieName({ id: data.movieID, title: data.newTitle }));
      dispatch(dispatchLoadingChanges(false));
    });
};


export {
  saveMovie, movieWatched, editMovieTitle, deleteMovie,
};
