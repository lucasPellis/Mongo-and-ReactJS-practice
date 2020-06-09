/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
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
      <form className="form">
        {genres.map((genre, idx) => (
          <div className="inputGroup" key={idx}>
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

export default RadioButtons;
