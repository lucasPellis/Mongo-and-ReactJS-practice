/* eslint-disable no-underscore-dangle */
import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import loadingReducer from './reducers/loading.reducer';
import moviesReducer from './reducers/movies.reducer';
import filteredReducer from './reducers/filtered.reducer';

const middleware = [thunk];
const allReducers = combineReducers({ allMovies: moviesReducer, filteredMovies: filteredReducer, isLoading: loadingReducer });
const initialState = {
  allMovies: [],
  filteredMovies: [],
  isLoading: false,
};
const store = createStore(allReducers, initialState, compose(applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export default store;
