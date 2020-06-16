import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './radioButton.css';

const RadioButtons = (props) => {
  const [value, setValue] = useState('');
  const { genres, selectedValue } = props;

  const changeHandler = (changedValue, callback) => {
    const newValue = changedValue.toLowerCase() === 'reset' ? '' : changedValue;
    setValue(newValue);
    callback(newValue);
  };

  return (
    <form>
      {genres.map((genre, idx) => (
        <div key={idx}>
          <input
            id={genre}
            name={genre}
            type="radio"
            value={genre}
            onChange={(e) => changeHandler(e.target.value, selectedValue)}
            checked={genre === value}
          />
          <label htmlFor={genre}>{genre}</label>
        </div>
      )) }
    </form>
  );
};


RadioButtons.propTypes = {
  genres: PropTypes.array,
  selectedValue: PropTypes.any.isRequired,
};

RadioButtons.defaultProps = {
  genres: [],
};

export default RadioButtons;
