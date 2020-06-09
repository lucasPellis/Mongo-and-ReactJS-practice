/* eslint-disable react/prop-types */
import React from 'react';
import RadioButtons from '../../../UI/inputs/radio-buttons/radioButtons.component';

const GenresRadioButtonsAccordion = (props) => {
  const { genres, selectedValue } = props;

  return (
    <RadioButtons genres={genres} selectedValue={selectedValue} />
  );
};

export default GenresRadioButtonsAccordion;
