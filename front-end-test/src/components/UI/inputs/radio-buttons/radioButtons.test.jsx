import React from 'react';
import { create } from 'react-test-renderer';

import RadioButtons from './radioButtons.component';

test('> UI Component - RadioButtons with custom props and number of items', () => {
  const genresTest = ['Horror', 'Romance'];

  // eslint-disable-next-line no-unused-vars
  let selectedValueTest = '';

  const { root } = create(
    <RadioButtons
      genres={genresTest}
      selectedValue={(v) => { selectedValueTest = v; }}
    />,
  );

  const elementList = root.findAllByType('input');
  expect(elementList.length).toEqual(genresTest.length);

//   act(elementList[0].props.onChange);
//   expect(selectedValueTest.toEqual(genresTest[0]));
});
