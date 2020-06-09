/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './checkBox.css';

const CheckBox = (props) => {
  const {
    id, label, checked, checkboxHandler,
  } = props;

  return (
    <div>
      <input
        type="checkbox"
        id={`${id}checkbox`}
        name={`${id}checkbox`}
        value={id}
        defaultChecked={checked}
        onChange={() => checkboxHandler()}
      />
      <label htmlFor={`${id}checkbox`}>{label}</label>
    </div>
  );
};

export default CheckBox;
