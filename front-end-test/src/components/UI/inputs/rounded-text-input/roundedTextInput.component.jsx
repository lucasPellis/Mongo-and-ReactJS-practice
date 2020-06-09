/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './roundedTextInput.css';

const RoundedTextInput = (props) => {
  const { placeholder, value, onChange } = props;

  return <input className="rounded-input" placeholder={placeholder} value={value} onChange={onChange} />;
};

export default RoundedTextInput;
