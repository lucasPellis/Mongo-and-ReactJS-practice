import React from 'react';
import PropTypes from 'prop-types';
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

CheckBox.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  label: PropTypes.string,
  checked: PropTypes.bool,
  checkboxHandler: PropTypes.any.isRequired,
};

CheckBox.defaultProps = {
  id: '',
  label: '',
  checked: false,
};

export default CheckBox;
