import { GET_MOVIES, ADD_MOVIE } from '../types/movies.types';

const moviesReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_MOVIES:
      return payload;
    case ADD_MOVIE:
      return state.concat([payload]);
    default:
      return state;
  }
};

export default moviesReducer;
