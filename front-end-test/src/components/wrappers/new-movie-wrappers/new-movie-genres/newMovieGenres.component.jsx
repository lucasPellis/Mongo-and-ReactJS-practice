/* eslint-disable react/prop-types */
import React from 'react';
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

export default NewMovieGenres;
