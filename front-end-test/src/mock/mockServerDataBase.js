const MoviesDBServerMock = (() => {
  let allMovies;

  const createInstance = () => {
    const object = [];
    return object;
  };

  return {
    getInstance() {
      if (!allMovies) {
        allMovies = createInstance();
      }
      return allMovies;
    },
  };
})();

export default MoviesDBServerMock;
