import React from 'react';
import { create } from 'react-test-renderer';
import MovieCard from './movieCard.component';


test('> UI Component - Rounded button with custom props and has class: btn-rounded', () => {
  const instance = create(<MovieCard />).root;

  const element = instance.findAllByProps({ className: 'cajaDeTexto' });

  expect(element.length).toEqual(5);
});
