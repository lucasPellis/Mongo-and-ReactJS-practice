import React from 'react';
import PropTypes from 'prop-types';
import './roundedTextInput.css';

const RoundedTextInput = (props) => {
  const { placeholder, value, onChange } = props;

  return <input className="rounded-input" placeholder={placeholder} value={value} onChange={onChange} />;
};

RoundedTextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.any.isRequired,
};

RoundedTextInput.defaultProps = {
  placeholder: '',
};

export default RoundedTextInput;
