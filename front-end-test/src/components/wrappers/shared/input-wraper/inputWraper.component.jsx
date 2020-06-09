/* eslint-disable react/no-deprecated */
/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './inputWraper.css';

import RoundedTextInput from '../../../UI/inputs/rounded-text-input/roundedTextInput.component';
import RoundedButton from '../../../UI/buttons/rounded-button/roundedButton.component';

// TODO Use redux-form.
class InputWraper extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.emitName = this.emitName.bind(this);
  }

  componentWillMount() {
    this.setState({ formValue: this.props.value || '' });
  }

  capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  formatText(formValue) {
    return this.capitalizeText(formValue.trim().toLowerCase());
  }

  onChange(e) {
    this.setState({ formValue: e.target.value });
  }

  emitName(e) {
    e.preventDefault();
    this.props.nameHandler(this.formatText(this.state.formValue));
    if (this.props.cleanValueAfterSubmit) this.setState({ formValue: '' });
  }

  render() {
    const { placeholder, onCancel } = this.props;
    const { formValue } = this.state;

    return (
      <div className="form-wrapper">
        <form onSubmit={this.emitName}>
          <RoundedTextInput
            placeholder={placeholder}
            value={formValue}
            onChange={(e) => this.onChange(e)}
          />
          <div className="form-btns">
            <RoundedButton
              type="submit"
              text="Save"
              className="btn-big btn-blue"
            />
            <RoundedButton
              type="button"
              text="Cancel"
              className="btn-big btn-red"
              onClick={onCancel}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default InputWraper;
