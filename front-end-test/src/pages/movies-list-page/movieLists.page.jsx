/* eslint-disable react/prop-types */
import React from 'react';
import './movieList.css';
import { connect } from 'react-redux';
import history from '../../utils/history';
import MoviesWrapper from '../../components/wrappers/movies-list-wrapers/movies-wrapper/moviesWrapper.component';
import RoundedButton from '../../components/UI/buttons/rounded-button/roundedButton.component';
import { editMovie, deleteMovie } from '../../store/actions/updateMovie.action';

const MoviesList = (props) => {
  const { movies } = props;

  const watchedMovieHandler = (id) => {
    // eslint-disable-next-line no-console
    console.log(id);
  };

  const editMovieHandler = (id) => {
    // eslint-disable-next-line no-console
    console.log(id);
  };

  const deleteMovieHandler = (id) => {
    // eslint-disable-next-line no-console
    console.log(id);
  };

  return (
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
      <MoviesWrapper
        movies={movies}
        watchedClick={watchedMovieHandler}
        editClick={editMovieHandler}
        deleteClick={deleteMovieHandler}
      />
    </div>
  );
};

const MapStateToProps = (state) => ({
  isLoading: state.isLoading,
  movies: state.movies,
});

const MapDispatchToProps = (dispatch) => ({
  editMovie: () => dispatch(editMovie()),
  deleteMovie: () => dispatch(deleteMovie()),
});

export default connect(MapStateToProps, MapDispatchToProps)(MoviesList);
