import React from 'react';
import { create } from 'react-test-renderer';
import CheckBox from './checkBox.component';


test('> UI Component - CheckBox with custom props', () => {
  const props = {
    id: '123', checked: true, checkboxHandler: '',
  };
  const instance = create(<CheckBox {...props} />).root;

  const element = instance.findByType('input');

  expect(element.props.id).toEqual(`${props.id}checkbox`);
  expect(element.props.defaultChecked).toEqual(props.checked);
});
