import React from 'react';
import PropTypes from 'prop-types';
import './newMovieName.css';
import InputWraper from '../../shared/input-wraper/inputWraper.component';

const NewMovieName = (props) => {
  const { movieName, newNameHadler, onCancel } = props;

  return (
    <div className="new-name-wrapper">
      <h2>New movie</h2>

      <InputWraper
        nameHandler={newNameHadler}
        onCancel={onCancel}
        value={movieName}
        placeholder="Insert the movie's name here"
      />
    </div>
  );
};

NewMovieName.propTypes = {
  movieName: PropTypes.string,
  newNameHadler: PropTypes.any,
  onCancel: PropTypes.any,
};

NewMovieName.defaultProps = {
  movieName: '',
};

export default NewMovieName;
