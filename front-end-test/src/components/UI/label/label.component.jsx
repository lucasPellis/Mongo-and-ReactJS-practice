/* eslint-disable react/prop-types */
import React from 'react';
import './label.css';

const Label = (props) => {
  const { text } = props;
  return <span className="label">{text}</span>;
};

export default Label;
