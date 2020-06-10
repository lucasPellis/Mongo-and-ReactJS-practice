import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './radioButton.css';

class RadioButtons extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  setValue(newValue, callback) {
    const value = newValue.toLowerCase() === 'reset' ? '' : newValue;
    this.setState({ value });
    callback(value);
  }

  render() {
    const { genres, selectedValue } = this.props;
    const { value } = this.state;

    return (
      <form>
        {genres.map((genre, idx) => (
          <div key={idx}>
            <input
              id={genre}
              name={genre}
              type="radio"
              value={genre}
              onChange={(e) => this.setValue(e.target.value, selectedValue)}
              checked={genre === value}
            />
            <label htmlFor={genre}>{genre}</label>
          </div>
        )) }
      </form>
    );
  }
}

RadioButtons.propTypes = {
  genres: PropTypes.array,
  selectedValue: PropTypes.any.isRequired,
};

RadioButtons.defaultProps = {
  genres: [],
};

export default RadioButtons;
