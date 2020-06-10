import React from 'react';
import PropTypes from 'prop-types';
import './label.css';

const Label = (props) => {
  const { text } = props;
  return <span className="label">{text}</span>;
};

Label.propTypes = {
  text: PropTypes.string,
};

Label.defaultProps = {
  text: '',
};

export default Label;
