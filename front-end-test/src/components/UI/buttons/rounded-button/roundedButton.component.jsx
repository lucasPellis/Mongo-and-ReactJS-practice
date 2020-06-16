import React from 'react';
import PropTypes from 'prop-types';
import './roundedButton.css';

const RoundedButton = (props) => {
  const {
    className, onClick, text, type,
  } = props;
  return <button type={type} onClick={onClick} className={`btn-rounded ${className}`}>{ text }</button>;
};

RoundedButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

RoundedButton.defaultProps = {
  className: '',
  text: '',
  type: 'button',
};

export default RoundedButton;
