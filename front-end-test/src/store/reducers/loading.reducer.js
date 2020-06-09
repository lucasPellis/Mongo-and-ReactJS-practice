import LOADING from '../types/loading.types';

const loadingReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case LOADING:
      return payload;
    default:
      return state;
  }
};

export default loadingReducer;
