import { ADD_MOVIE } from '../types/movies.types';
import LOADING from '../types/loading.types';
import history from '../../utils/history';

const delayLoadingTime = 1000;

const dispatchNewMovie = (movie) => ({ type: ADD_MOVIE, payload: movie });
const dispatchLoadingChanges = (isLoading) => ({ type: LOADING, payload: isLoading });

const saveMovie = (movie) => (dispatch) => {
  dispatch(dispatchLoadingChanges(true));
  setTimeout(() => {
    dispatch(dispatchNewMovie(movie));
    dispatch(dispatchLoadingChanges(false));
    history.push('/');
  }, delayLoadingTime);
};

const deleteMovie = () => null;

const editMovie = () => null;

export { saveMovie, editMovie, deleteMovie };
