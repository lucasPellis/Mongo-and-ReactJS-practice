import FILTERED_MOVIES from '../types/filtered.types';

const filteredReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FILTERED_MOVIES:
      return payload;
    default:
      return state;
  }
};

export default filteredReducer;
