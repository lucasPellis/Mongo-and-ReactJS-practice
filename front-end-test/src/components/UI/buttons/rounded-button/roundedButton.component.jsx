/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import './roundedButton.css';

const RoundedButton = (props) => {
  const {
    className, onClick, text, type,
  } = props;
  return <button type={type} onClick={onClick} className={`btn ${className}`}>{ text }</button>;
};

export default RoundedButton;
