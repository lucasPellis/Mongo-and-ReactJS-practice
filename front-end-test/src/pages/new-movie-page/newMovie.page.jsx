import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { saveMovie } from '../../store/actions/updateMovie.action';
import history from '../../utils/history';


import NewMovieName from '../../components/wrappers/new-movie-wrappers/new-movie-name/newMovieName';
import NewMovieGenres from '../../components/wrappers/new-movie-wrappers/new-movie-genres/newMovieGenres.component';
import LoadSpinner from '../../components/UI/load-spinner/loadSpinner.component';

class NewMoviePage extends Component {
  constructor(props) {
    super(props);

    this.state = { nameStep: true, movieName: '', genres: [] };

    this.newNameHadler = this.newNameHadler.bind(this);
    this.newGenreHandler = this.newGenreHandler.bind(this);
    this.saveMovieHandler = this.saveMovieHandler.bind(this);
  }

  newNameHadler(name) {
    if (name) {
      this.setState({ nameStep: false, movieName: name });
    }
  }

  newGenreHandler(genre) {
    const { genres } = this.state;

    this.setState({
      genres: genres.concat([genre]),
    });
  }

  saveMovieHandler() {
    const { movieName, genres } = this.state;

    const movie = {
      id: new Date().valueOf(),
      title: movieName,
      genres,
      watched: false,
      date: new Date(),
    };

    // eslint-disable-next-line react/destructuring-assignment
    this.props.saveMovie(movie);
  }

  render() {
    const { nameStep, movieName, genres } = this.state;
    const { isLoading } = this.props;

    const view = nameStep ? (
      <NewMovieName movieName={movieName} newNameHadler={this.newNameHadler} onCancel={() => history.push('/')} />
    ) : (
      <NewMovieGenres
        movieName={movieName}
        genres={genres}
        newGendreHandler={this.newGenreHandler}
        saveMovieHandler={this.saveMovieHandler}
        onCancel={() => this.setState({ nameStep: true })}
      />
    );

    return isLoading ? <LoadSpinner /> : view;
  }
}

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
