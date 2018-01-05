import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

it('renders Home component', () => {
  const rendered = renderer.create(<Home navigator={{ push: () => {} }} />).toJSON();
  expect(rendered).toMatchSnapshot();
});