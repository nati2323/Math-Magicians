import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import  Quote from '../pages/Quote';

it('Home renders correctly', () => {
  const tree = renderer.create(
      <Quote />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});