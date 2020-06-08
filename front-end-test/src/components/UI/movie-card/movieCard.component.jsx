/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './movieCard.css';
import GenreLabelsWrapper from '../../wrappers/genre-label-wrapper/genreLabelWrapper.component';
import CheckBox from '../checkBox/checkBox.component';
import RoundedButton from '../buttons/rounded-button/roundedButton.component';

const MovieCard = (props) => {
  // Add ID and
  const { title, genres, watched } = props;

  return (
    <div className="card-container">
      <div className="card-body">
        <div className="card-title">
          <h1>{title}</h1>
        </div>
        <div className="card-movie-genres">
          <GenreLabelsWrapper genres={genres} />
        </div>
      </div>

      <div className="card-footer">
        <div className="buttons-footer-containers">
          <RoundedButton text="Delete" className="btn-red" />
          <RoundedButton text="Edit" className="btn-blue" />
        </div>

        <div className="checkbox-footer-containers">
          <CheckBox label="Movie viewed" checked={watched} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
