import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './movieCard.css';
import CheckBox from '../checkBox/checkBox.component';
import RoundedButton from '../buttons/rounded-button/roundedButton.component';
import GenreLabelsWrapper from '../../wrappers/shared/genre-label-wrapper/genreLabelWrapper.component';
import InputWraper from '../../wrappers/shared/input-wraper/inputWraper.component';

const MovieCard = (props) => {
  const [editName, setEditName] = useState(false);
  const {
    id, title, genres, watched, deleteClick, editClick, watchedClick,
  } = props;

  const emitName = (name, callback) => {
    callback(id, name);
    setEditName(false);
  };


  return (
    <div className="card-container">
      <div className="card-body">
        <div className="card-title">
          { !editName ? (<h1>{title}</h1>)
            : (
              <InputWraper
                value={title}
                hideCancel
                nameHandler={(name) => emitName(name, editClick)}
              />
            ) }
        </div>
        <div className="card-movie-genres">
          <GenreLabelsWrapper genres={genres} />
        </div>
      </div>

      <div className="card-footer">
        <div className="buttons-footer-containers">
          <RoundedButton type="button" text="Delete" className="btn-normal btn-red" onClick={() => deleteClick(id)} />
          {(!editName)
            && (<RoundedButton type="button" text="Edit name" className="btn-normal btn-blue" onClick={() => setEditName(true)} />)}
        </div>

        <div className="checkbox-footer-containers">
          <CheckBox id={id} label="Movie viewed" checked={watched} checkboxHandler={() => watchedClick(id)} />
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  title: PropTypes.string,
  genres: PropTypes.array,
  watched: PropTypes.bool,
  deleteClick: PropTypes.any,
  editClick: PropTypes.any,
  watchedClick: PropTypes.any,
};

MovieCard.defaultProps = {
  id: '',
  title: '',
  genres: [],
  watched: false,
  deleteClick: () => { console.log('delete without callback'); },
  editClick: () => { console.log('edit without callback'); },
  watchedClick: () => { console.log('watched without callback'); },
};

export default MovieCard;
