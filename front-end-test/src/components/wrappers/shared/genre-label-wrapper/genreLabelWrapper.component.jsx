import React from 'react';
import PropTypes from 'prop-types';
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

GenreLabelsWrapper.propTypes = {
  genres: PropTypes.array,
};

GenreLabelsWrapper.defaultProps = {
  genres: [],
};

export default GenreLabelsWrapper;
