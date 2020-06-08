/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './checkBox.css';

const CheckBox = (props) => {
  const { label, checked } = props;

  return (
    <div>
      <input
        type="checkbox"
        id={label}
        name={label}
        value={label}
        checked={checked}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default CheckBox;
