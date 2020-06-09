/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Label from '../../../UI/label/label.component';
import './genreWrapper.css';

const GenreLabelsWrapper = (props) => {
  const { genres } = props;
  const arrayWithoutDuplicates = [...new Set(genres)];

  return (
    <div className="genres-wrapper">
      {
      arrayWithoutDuplicates.length > 0
        ? arrayWithoutDuplicates.map((genre, idx) => (
          <Label key={idx} text={genre} />
        ))
        : <b>There are no genres</b>
    }
    </div>
  );
};

export default GenreLabelsWrapper;
