/* eslint-disable react/no-deprecated */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './movieCard.css';
import CheckBox from '../checkBox/checkBox.component';
import RoundedButton from '../buttons/rounded-button/roundedButton.component';
import GenreLabelsWrapper from '../../wrappers/shared/genre-label-wrapper/genreLabelWrapper.component';
import InputWraper from '../../wrappers/shared/input-wraper/inputWraper.component';

class MovieCard extends Component {
  componentWillMount() {
    this.setState({ editName: false });
  }

  render() {
    const {
      id, title, genres, watched, deleteClick, editClick, watchedClick,
    } = this.props;

    const emitName = (name) => {
      editClick(id, name);
      this.setState({ editName: false });
    };

    return (
      <div className="card-container">
        <div className="card-body">
          <div className="card-title">
            { !this.state.editName ? (<h1>{title}</h1>) : (<InputWraper value={title} hideCancel nameHandler={(name) => emitName(name)} />) }
          </div>
          <div className="card-movie-genres">
            <GenreLabelsWrapper genres={genres} />
          </div>
        </div>

        <div className="card-footer">
          <div className="buttons-footer-containers">
            <RoundedButton type="button" text="Delete" className="btn-normal btn-red" onClick={() => deleteClick(id)} />
            {(!this.state.editName)
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

export default MovieCard;
