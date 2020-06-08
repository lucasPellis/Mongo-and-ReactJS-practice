/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './radioButton.css';

const RadioButton = (props) => (
  // eslint-disable-next-line jsx-a11y/control-has-associated-label
  // eslint-disable-next-line react/button-has-type
  <button {... props} />
);

export default RadioButton;
