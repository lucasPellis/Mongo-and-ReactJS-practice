/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Label from '../../UI/label/label.component';
import './genreWrapper.css';

const GenreLabelsWrapper = (props) => {
  const { genres } = props;

  return (
    <div className="genres-wrapper">
      {genres.map((genre, idx) => (
        <Label key={idx} text={genre} />
      ))}
    </div>
  );
};

export default GenreLabelsWrapper;
