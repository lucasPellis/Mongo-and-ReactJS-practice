import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './inputWraper.css';

import RoundedTextInput from '../../../UI/inputs/rounded-text-input/roundedTextInput.component';
import RoundedButton from '../../../UI/buttons/rounded-button/roundedButton.component';

const InputWraper = (props) => {
  const {
    placeholder,
    onCancel,
    hideCancel,
    cleanValueAfterSubmit,
    nameHandler,
    value,
  } = props;

  const [formValue, setFormValue] = useState(value || '');

  const onChange = (e) => {
    setFormValue(e.target.value);
  };

  const capitalizeText = (textToCapitalize) => textToCapitalize.charAt(0).toUpperCase() + textToCapitalize.slice(1);

  const formatText = (text) => capitalizeText(text.trim().toLowerCase());

  const emitName = (event, callback) => {
    event.preventDefault();
    if (cleanValueAfterSubmit) setFormValue('');
    callback(formatText(formValue));
  };

  return (
    <div className="form-wrapper">
      <form
        onSubmit={(e) => emitName(e, nameHandler)}
      >
        <RoundedTextInput
          placeholder={placeholder}
          value={formValue}
          onChange={(e) => onChange(e)}
        />
        <div className={hideCancel ? 'form-btns-one' : 'form-btns-two'}>
          <RoundedButton
            type="submit"
            text="Save"
            className="btn-big btn-blue"
          />
          {!hideCancel && (
            <RoundedButton
              type="button"
              text="Cancel"
              className="btn-big btn-red"
              onClick={onCancel}
            />
          )}
        </div>
      </form>
    </div>
  );
};

InputWraper.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onCancel: PropTypes.any,
  hideCancel: PropTypes.any,
  cleanValueAfterSubmit: PropTypes.any,
  nameHandler: PropTypes.any,
};

InputWraper.defaultProps = {
  value: '',
  placeholder: '',
};

export default InputWraper;
