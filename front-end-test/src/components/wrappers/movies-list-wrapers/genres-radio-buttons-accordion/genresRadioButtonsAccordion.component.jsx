import React from 'react';
import PropTypes from 'prop-types';
import RadioButtons from '../../../UI/inputs/radio-buttons/radioButtons.component';

const GenresRadioButtonsAccordion = (props) => {
  const { genres, selectedValue } = props;


  // TODO make accordion to hide buttons.
  return (
    <RadioButtons genres={genres} selectedValue={selectedValue} />
  );
};

GenresRadioButtonsAccordion.propTypes = {
  genres: PropTypes.array,
  selectedValue: PropTypes.any.isRequired,
};

GenresRadioButtonsAccordion.defaultProps = {
  genres: [],
};

export default GenresRadioButtonsAccordion;
