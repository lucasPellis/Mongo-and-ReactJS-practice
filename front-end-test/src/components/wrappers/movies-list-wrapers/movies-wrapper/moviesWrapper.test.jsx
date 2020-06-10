import React from 'react';
import { create } from 'react-test-renderer';
import MoviesWrapper from './moviesWrapper.component';

test('Test movies wrappers', () => {
  const movies = [
    {
      id: '1591757256477',
      watched: false,
      title: '1',
      genres: [],
    },
    {
      id: '1591757256479',
      watched: true,
      title: '2',
      genres: ['Horror'],
    },
    {
      id: '1591757256480',
      watched: false,
      title: '3',
      genres: [],
    },
  ];

  const testRenderer = create(
    <MoviesWrapper movies={movies} />,
  );

  // test with movies
  const { root } = testRenderer;
  const elementWithOutFilters = root.findAllByProps({
    className: 'card-container',
  });
  expect(elementWithOutFilters.length).toEqual(movies.length);

  // Test without movies.
  testRenderer.update(<MoviesWrapper movies={[]} />);
  const elementWithGenreFilter = root.findAllByProps({
    className: 'card-container',
  });
  expect(elementWithGenreFilter.length).toEqual(0);
});
