/* eslint-disable react/prop-types */
import React from 'react';
import './roundedButton.css';

const RoundedButton = (props) => {
  const { className, onClick, text } = props;
  return <button type="button" onClick={onClick} className={`btn ${className}`}>{ text }</button>;
};

export default RoundedButton;
