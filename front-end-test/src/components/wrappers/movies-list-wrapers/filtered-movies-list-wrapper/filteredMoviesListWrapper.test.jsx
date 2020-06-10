import React from 'react';
import { create } from 'react-test-renderer';
import FilteredMoviesListWrapper from './filteredMoviesListWrapper.component';

test('Tests movies filters', () => {
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

  let props = { filterString: '', filterGenre: '' };
  const testRenderer = create(
    <FilteredMoviesListWrapper movies={movies} {...props} />,
  );

  // test withoutFilters.
  const { root } = testRenderer;
  const elementWithOutFilters = root.findAllByProps({
    className: 'card-container',
  });
  expect(elementWithOutFilters.length).toEqual(movies.length);

  // Test with genre filter.
  props = { filterString: '', filterGenre: 'Horror' };
  testRenderer.update(<FilteredMoviesListWrapper movies={movies} {...props} />);
  const elementWithGenreFilter = root.findAllByProps({
    className: 'card-container',
  });
  expect(elementWithGenreFilter.length).toEqual(1);

  // Test with title filter.
  props = { filterString: '2', filterGenre: '' };
  testRenderer.update(<FilteredMoviesListWrapper movies={movies} {...props} />);
  const elementWithTitleFilter = root.findAllByProps({
    className: 'card-container',
  });
  expect(elementWithTitleFilter.length).toEqual(1);

  // Test with both filters FAIL.
  props = { filterString: '1', filterGenre: 'Horror' };
  testRenderer.update(<FilteredMoviesListWrapper movies={movies} {...props} />);
  const elementWithBothFiltersFail = root.findAllByProps({
    className: 'card-container',
  });
  expect(elementWithBothFiltersFail.length).toEqual(0);
});
