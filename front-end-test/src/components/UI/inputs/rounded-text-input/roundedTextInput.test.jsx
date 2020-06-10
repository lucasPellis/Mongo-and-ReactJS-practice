import React from 'react';
import { create } from 'react-test-renderer';
import RoundedTextInput from './roundedTextInput.component';


test('> UI Component - Rounded button with custom props and has class: rounded-input', () => {
  const props = {
    onChange: '12', placeholder: 'test', value: 'test',
  };
  const instance = create(<RoundedTextInput {...props} />).root;

  const element = instance.findByType('input');

  expect(element.props.className.includes('rounded-input')).toBe(true);
  expect(element.props.onChange).toEqual(props.onChange);
  expect(element.props.placeholder).toEqual(props.placeholder);
  expect(element.props.value).toEqual(props.value);
});
