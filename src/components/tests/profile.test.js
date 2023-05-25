import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Profile from '../../components/profile';
import store from '../../redux/store';

it('renders correctly', () => {
  const profile = renderer
    .create(
      <Provider store={store}><Profile /></Provider>,
    )
    .toJSON();
  expect(profile).toMatchSnapshot();
});