import FILTERED_MOVIES from '../types/filtered.types';

const dispatchFilteredMovies = (isLoading) => ({ type: FILTERED_MOVIES, payload: isLoading });

const getAllMovies = () => {

}

//filter by text

//filter by genre

export { getAllMovies };
