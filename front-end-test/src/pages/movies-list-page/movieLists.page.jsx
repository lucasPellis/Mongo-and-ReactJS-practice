/* eslint-disable react/no-deprecated */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './movieList.css';
import { connect } from 'react-redux';
import {
  deleteMovie,
  movieWatched,
  editMovieTitle,
} from '../../store/actions/updateMovie.action';
import history from '../../utils/history';
import MoviesWrapper from '../../components/wrappers/movies-list-wrapers/movies-wrapper/moviesWrapper.component';
import RoundedButton from '../../components/UI/buttons/rounded-button/roundedButton.component';
import LoadSpinner from '../../components/UI/load-spinner/loadSpinner.component';
import RoundedTextInput from '../../components/UI/inputs/rounded-text-input/roundedTextInput.component';

class MoviesList extends Component {
  // const { movies } = props;

  constructor(props) {
    super(props);

    this.onChangeSearchBar = this.onChangeSearchBar.bind(this);
    this.watchedMovieHandler = this.watchedMovieHandler.bind(this);
    this.editMovieHandler = this.editMovieHandler.bind(this);
    this.deleteMovieHandler = this.deleteMovieHandler.bind(this);
  }

  componentWillMount() {
    this.setState({ filterString: '' });
  }

  onChangeSearchBar(e) {
    this.setState({ filterString: e.target.value });
  }

  watchedMovieHandler(movieID) {
    this.props.movieWatched(movieID);
  }

  editMovieHandler(movieID, newTitle) {
    this.props.editMovieTitle(movieID, newTitle);
  }

  deleteMovieHandler(movieId) {
    this.props.deleteMovie(movieId);
  }

  render() {
    return this.props.isLoading ? (
      <LoadSpinner />
    ) : (
      <div>
        <div className="view-wrapper">
          <RoundedButton
            text="Add movie"
            type="button"
            className="btn-green btn-big"
            onClick={() => {
              history.push('/new');
            }}
          />
        </div>

        <div className="view-wrapper">
          <RoundedTextInput placeholder="Search movies by name" onChange={(e) => this.onChangeSearchBar(e)} />
        </div>

        <MoviesWrapper
          movies={this.props.movies}
          filterString={this.state.filterString}
          watchedClick={this.watchedMovieHandler}
          editClick={this.editMovieHandler}
          deleteClick={this.deleteMovieHandler}
        />
      </div>
    );
  }
}

const MapStateToProps = (state) => ({
  isLoading: state.isLoading,
  movies: state.movies,
});

const MapDispatchToProps = (dispatch) => ({
  movieWatched: (movieID) => dispatch(movieWatched(movieID)),
  deleteMovie: (movieID) => dispatch(deleteMovie(movieID)),
  editMovieTitle: (movieID, newTitle) => dispatch(editMovieTitle(movieID, newTitle)),
});

export default connect(MapStateToProps, MapDispatchToProps)(MoviesList);
