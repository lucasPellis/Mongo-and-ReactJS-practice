import React from 'react';
import PropTypes from 'prop-types';
import './newMovieGenres.css';
import GenreLabelsWrapper from '../../shared/genre-label-wrapper/genreLabelWrapper.component';
import InputWraper from '../../shared/input-wraper/inputWraper.component';
import RoundedButton from '../../../UI/buttons/rounded-button/roundedButton.component';

const NewMovieGenres = (props) => {
  const {
    movieName,
    genres,
    newGendreHandler,
    saveMovieHandler,
    onCancel,
  } = props;

  const newGenreHandler = (genreName) => {
    if (genreName) newGendreHandler(genreName);
  };

  return (
    <div className="add-genres-wrapper">
      <div>
        <h2>{movieName}</h2>
        Genres:
        <GenreLabelsWrapper genres={genres} />
      </div>
      <div className="genre-form-wrapper">
        <InputWraper
          placeholder="Insert a new genre"
          nameHandler={newGenreHandler}
          onCancel={onCancel}
          cleanValueAfterSubmit
        />
      </div>

      <div className="center-elements">
        <RoundedButton
          text="Save movie"
          className="fixed-bottom btn-green btn-big"
          onClick={saveMovieHandler}
        />
      </div>
    </div>
  );
};

NewMovieGenres.propTypes = {
  movieName: PropTypes.string,
  genres: PropTypes.array,
  newGendreHandler: PropTypes.any,
  saveMovieHandler: PropTypes.any,
  onCancel: PropTypes.any,
};

NewMovieGenres.defaultProps = {
  movieName: '',
  genres: [],
  newGendreHandler: () => { console.log('new gendre without callback'); },
  saveMovieHandler: () => { console.log('save movie without callback'); },
  onCancel: () => { console.log('cancel without callback'); },
};

export default NewMovieGenres;
