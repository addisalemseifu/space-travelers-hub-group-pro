import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import Navigation from '../Navigation';

describe('Navbar', () => {
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
  it('render all the navbar features', () => {
    render(<MemoryRouter><Navigation /></MemoryRouter>);
    screen.debug();
    const rocketLink = screen.getByText('Rockets');
    const dragonLink = screen.getByText('Dragon');
    const missionLink = screen.getByText('Missions');
    const profileLink = screen.getByText('My Profile');

    expect(rocketLink).toBeInTheDocument();
    expect(dragonLink).toBeInTheDocument();
    expect(missionLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
  });
});
