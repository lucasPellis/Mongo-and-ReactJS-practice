import store from '../store/index';

const delayLoadingTime = 3000;

const getAllMovies = () => {
  const moviePromise = new Promise((resolve) => {
    setTimeout(() => {
      const { movies } = store.getState();
      resolve(movies);
    }, delayLoadingTime);
  });

  return moviePromise;
};

const filterMoviesByTitleText = (text) => {

};

const filterMoviesByGenre = (genre) => {

};


export { getAllMovies, filterMoviesByTitleText, filterMoviesByGenre };


// VER DE Actualizar lista despues de cambiar alguna propiedad de objeto
