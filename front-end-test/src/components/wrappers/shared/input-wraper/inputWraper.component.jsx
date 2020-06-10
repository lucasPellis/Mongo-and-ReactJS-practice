/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './inputWraper.css';

import RoundedTextInput from '../../../UI/inputs/rounded-text-input/roundedTextInput.component';
import RoundedButton from '../../../UI/buttons/rounded-button/roundedButton.component';

class InputWraper extends Component {
  constructor(props) {
    super(props);

    const { value } = props;
    this.state = { formValue: value || '' };

    this.onChange = this.onChange.bind(this);
    this.emitName = this.emitName.bind(this);
  }

  onChange(e) {
    this.setState({ formValue: e.target.value });
  }

  capitalizeText(textToCapitalize) {
    return textToCapitalize.charAt(0).toUpperCase() + textToCapitalize.slice(1);
  }

  formatText(formValue) {
    return this.capitalizeText(formValue.trim().toLowerCase());
  }

  emitName(event, value, cleanValueAfterSubmit, callback) {
    event.preventDefault();
    if (cleanValueAfterSubmit) this.setState({ formValue: '' });
    callback(this.formatText(value));
  }

  render() {
    const {
      placeholder, onCancel, hideCancel, cleanValueAfterSubmit, nameHandler,
    } = this.props;
    const { formValue } = this.state;

    return (
      <div className="form-wrapper">
        <form onSubmit={(e) => this.emitName(e, formValue, cleanValueAfterSubmit, nameHandler)}>
          <RoundedTextInput
            placeholder={placeholder}
            value={formValue}
            onChange={(e) => this.onChange(e)}
          />
          <div className={hideCancel ? 'form-btns-one' : 'form-btns-two'}>
            <RoundedButton
              type="submit"
              text="Save"
              className="btn-big btn-blue"
            />
            {(!hideCancel) && (
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
  }
}

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
