import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movieCard.css';
import CheckBox from '../checkBox/checkBox.component';
import RoundedButton from '../buttons/rounded-button/roundedButton.component';
import GenreLabelsWrapper from '../../wrappers/shared/genre-label-wrapper/genreLabelWrapper.component';
import InputWraper from '../../wrappers/shared/input-wraper/inputWraper.component';

class MovieCard extends Component {
  constructor(props) {
    super(props);

    this.state = { editName: false };
  }

  emitName(id, name, callback) {
    callback(id, name);
    this.setState({ editName: false });
  }

  render() {
    const {
      id, title, genres, watched, deleteClick, editClick, watchedClick,
    } = this.props;
    const { editName } = this.state;

    return (
      <div className="card-container">
        <div className="card-body">
          <div className="card-title">
            { !editName ? (<h1>{title}</h1>)
              : (
                <InputWraper
                  value={title}
                  hideCancel
                  nameHandler={(name) => this.emitName(id, name, editClick)}
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
            && (<RoundedButton type="button" text="Edit name" className="btn-normal btn-blue" onClick={() => this.setState({ editName: true })} />)}
          </div>

          <div className="checkbox-footer-containers">
            <CheckBox id={id} label="Movie viewed" checked={watched} checkboxHandler={() => watchedClick(id)} />
          </div>
        </div>
      </div>
    );
  }
}

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
