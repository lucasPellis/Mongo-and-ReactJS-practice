import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { saveMovie } from '../../store/actions/updateMovie.action';
import history from '../../utils/history';


import NewMovieName from '../../components/wrappers/new-movie-wrappers/new-movie-name/newMovieName';
import NewMovieGenres from '../../components/wrappers/new-movie-wrappers/new-movie-genres/newMovieGenres.component';
import LoadSpinner from '../../components/UI/load-spinner/loadSpinner.component';

const NewMoviePage = (props) => {
  const { isLoading } = props;

  const [nameStep, setNameStep] = useState(true);
  const [movieName, setMovieName] = useState('');
  const [genres, setGenres] = useState([]);


  const newNameHadler = (name) => {
    if (name) {
      setNameStep(false);
      setMovieName(name);
    }
  };

  const newGenreHandler = (genre) => {
    setGenres(genres.concat([genre]));
  };

  const saveMovieHandler = () => {
    const movie = {
      id: new Date().valueOf(),
      title: movieName,
      genres,
      watched: false,
      date: new Date(),
    };

    props.saveMovie(movie);
  };


  const view = nameStep ? (
    <NewMovieName movieName={movieName} newNameHadler={newNameHadler} onCancel={() => history.push('/')} />
  ) : (
    <NewMovieGenres
      movieName={movieName}
      genres={genres}
      newGendreHandler={newGenreHandler}
      saveMovieHandler={saveMovieHandler}
      onCancel={() => setNameStep(true)}
    />
  );

  return isLoading ? <LoadSpinner /> : view;
};

NewMoviePage.propTypes = {
  isLoading: PropTypes.bool,
  saveMovie: PropTypes.any,
};


const MapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

const MapDispatchToProps = (dispatch) => ({
  saveMovie: (movie) => dispatch(saveMovie(movie)),
});

export default connect(MapStateToProps, MapDispatchToProps)(NewMoviePage);
