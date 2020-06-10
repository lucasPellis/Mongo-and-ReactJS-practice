import React from 'react';
import { create } from 'react-test-renderer';
import NewMovieGenres from './newMovieGenres.component';


test('> New movie genres has all components classes', () => {
  const { root } = create(<NewMovieGenres />);

  const movieTitle = root.findByType('h2');
  const genresList = root.findByProps({ className: 'genre-form-wrapper' });
  const genreInput = root.findByType('form');


  expect(!!movieTitle).toBe(true);
  expect(!!genresList).toBe(true);
  expect(!!genreInput).toBe(true);
});
