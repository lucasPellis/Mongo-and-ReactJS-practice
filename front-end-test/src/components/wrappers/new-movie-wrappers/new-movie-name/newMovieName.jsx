/* eslint-disable react/prop-types */
import React from 'react';
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

export default NewMovieName;
