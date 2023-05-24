import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from './planet.png';

export default function Navigation() {
  return (
    <nav>
      <div className="logoname">
        <img src={planet} alt="" />
        <h2>Space Travelers&apos; Hub</h2>
      </div>
      <div className="navcont">
        <li className="nav-item">
          <NavLink
            to="/dragons"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {' '}
            Dragon
          </NavLink>
        </li>
        <li className="links">
          <NavLink to="/" ClassName="link">
            Rockets
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {' '}
            My Profile
          </NavLink>
        </li>
      </div>
    </nav>
  );
}
