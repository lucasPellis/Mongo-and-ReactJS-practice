import React from 'react';
import { create } from 'react-test-renderer';
import GenreLabelsWrapper from './genreLabelWrapper.component';

test('Genre label wrapper renderize all elements', () => {
  let genres = [];


  const instance = create(<GenreLabelsWrapper genres={genres} />);
  const { root } = instance;

  const listWithoutElements = root.findAllByProps({ className: 'label' });
  expect(listWithoutElements.length).toEqual(genres.length);

  const noGenresmsg = root.findAllByType('b');
  expect(noGenresmsg.length).toEqual(1);
  expect(noGenresmsg[0].children[0]).toEqual('There are no genres');

  genres = ['Horror', 'Romance'];
  instance.update(<GenreLabelsWrapper genres={genres} />);
  const listWithElements = root.findAllByProps({ className: 'label' });
  expect(listWithElements.length).toEqual(genres.length);
});
