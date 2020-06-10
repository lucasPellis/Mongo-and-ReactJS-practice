import React from 'react';
import { create } from 'react-test-renderer';
import RoundedButton from './roundedButton.component';


test('> UI Component - Rounded button with custom props and has class: btn-rounded', () => {
  const props = {
    className: 'btn-big', onClick: 'onClick', text: 'ok', type: 'button',
  };
  const instance = create(<RoundedButton {...props} />).root;

  const element = instance.findByType('button');

  expect(element.props.className.includes('btn-rounded')).toBe(true);
  expect(element.props.className).toEqual(`btn-rounded ${props.className}`);
  expect(element.children[0]).toEqual(props.text);
  expect(element.props.onClick).toEqual(props.onClick);
  expect(element.props.type).toEqual(props.type);
});
