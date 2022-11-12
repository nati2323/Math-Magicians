import React from 'react';
import renderer from 'react-test-renderer';
import  NotMatch from '../pages/NotMatch'

it('NotMatch renders correctly', () => {
  const tree = renderer.create(
      <NotMatch />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});