
import store from '../store/index';

const delayLoadingTime = 1000;


// Simulate API fetch
const getMovies = () => {
  const moviesPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(store.getState().allMovies);
    }, delayLoadingTime);
  });

  return moviesPromise;
};


const saveMovieAPI = (movie) => {
  const moviePromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(movie);
    }, delayLoadingTime);
  });

  return moviePromise;
};

const deleteMovieAPI = (movieID) => {
  const moviePromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(movieID);
    }, delayLoadingTime);
  });

  return moviePromise;
};

const movieWatchedAPI = (movieID) => {
  const moviePromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(movieID);
    }, delayLoadingTime);
  });

  return moviePromise;
};

const editMovieTitleAPI = (movieID, newTitle) => {
  const moviePromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ movieID, newTitle });
    }, delayLoadingTime);
  });

  return moviePromise;
};

export {
  getMovies, saveMovieAPI, deleteMovieAPI, movieWatchedAPI, editMovieTitleAPI,
};
