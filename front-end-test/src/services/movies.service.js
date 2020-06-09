
const delayLoadingTime = 1000;


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
  saveMovieAPI, deleteMovieAPI, movieWatchedAPI, editMovieTitleAPI,
};
