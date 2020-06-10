import React from 'react';
import { create } from 'react-test-renderer';
import Label from './label.component';


test("> UI Component - Label has class: btn-rounded'", () => {
  const props = { text: 'test' };

  const { root } = create(<Label text={props.text} />);

  const element = root.findByType('span');
  expect(element.props.className.includes('label')).toBe(true);
  expect(element.children[0]).toEqual(props.text);
});
