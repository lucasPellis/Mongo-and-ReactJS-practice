/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './movieCard.css';
import CheckBox from '../checkBox/checkBox.component';
import RoundedButton from '../buttons/rounded-button/roundedButton.component';
import GenreLabelsWrapper from '../../wrappers/shared/genre-label-wrapper/genreLabelWrapper.component';

const MovieCard = (props) => {
  const {
    id, title, genres, watched, deleteClick, editClick, watchedClick,
  } = props;

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
          <RoundedButton type="button" text="Delete" className="btn-normal btn-red" onClick={() => deleteClick(id)} />
          <RoundedButton type="button" text="Edit" className="btn-normal btn-blue" onClick={() => editClick(id)} />
        </div>

        <div className="checkbox-footer-containers">
          <CheckBox id={id} label="Movie viewed" checked={watched} checkboxHandler={() => watchedClick(id)} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
