import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../../components/Navigation';

it('renders correctly', () => {
  const navbar = renderer
    .create(
      <Router>
        <Navigation />
      </Router>,
    )
    .toJSON();
  expect(navbar).toMatchSnapshot();
});