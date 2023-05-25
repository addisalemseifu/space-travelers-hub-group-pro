import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Dragon from '../dragons';

describe('Test Rockets Component', () => {
  it('should render Rockets component', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Dragon />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
