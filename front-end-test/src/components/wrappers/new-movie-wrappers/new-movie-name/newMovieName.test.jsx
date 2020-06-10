import React from 'react';
import { create } from 'react-test-renderer';
import NewMovieName from './newMovieName';


test('> New movie name has input form', () => {
  const { root } = create(<NewMovieName />);

  const nameInput = root.findByType('form');

  expect(!!nameInput).toBe(true);
});
