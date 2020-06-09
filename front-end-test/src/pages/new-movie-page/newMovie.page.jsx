/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveMovie } from '../../store/actions/updateMovie.action';
import history from '../../utils/history';


import NewMovieName from '../../components/wrappers/new-movie-wrappers/new-movie-name/newMovieName';
import NewMovieGenres from '../../components/wrappers/new-movie-wrappers/new-movie-genres/newMovieGenres.component';
import LoadSpinner from '../../components/UI/load-spinner/loadSpinner.component';

class NewMoviePage extends Component {
  constructor(props) {
    super(props);

    this.newNameHadler = this.newNameHadler.bind(this);
    this.newGenreHandler = this.newGenreHandler.bind(this);
    this.saveMovieHandler = this.saveMovieHandler.bind(this);
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    this.setState({ nameStep: true, movieName: '', genres: [] });
  }

  newNameHadler(name) {
    if (name) {
      this.setState({ nameStep: false, movieName: name });
    }
  }

  newGenreHandler(genre) {
    this.setState({
      genres: this.state.genres.concat([genre]),
    });
  }

  saveMovieHandler() {
    const movie = {
      id: new Date().valueOf(),
      title: this.state.movieName,
      genres: this.state.genres,
      date: new Date(),
    };

    this.props.saveMovie(movie);
  }

  render() {
    const { nameStep, movieName } = this.state;
    const { isLoading } = this.props;

    const view = nameStep ? (
      <NewMovieName movieName={movieName} newNameHadler={this.newNameHadler} onCancel={() => history.push('/')} />
    ) : (
      <NewMovieGenres
        movieName={movieName}
        genres={this.state.genres}
        newGendreHandler={this.newGenreHandler}
        saveMovieHandler={this.saveMovieHandler}
        onCancel={() => this.setState({ nameStep: true })}
      />
    );


    return isLoading ? <LoadSpinner /> : view;
  }
}

const MapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

const MapDispatchToProps = (dispatch) => ({
  saveMovie: (movie) => dispatch(saveMovie(movie)),
});

export default connect(MapStateToProps, MapDispatchToProps)(NewMoviePage);
