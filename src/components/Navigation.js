import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import planet from './planet.png';

export default function Navigation() {
  return (
    <nav>
      <img src={planet} alt="" />
      <li className="nav-item">
        <NavLink
          to="/"
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
      <li>
        <NavLink to="/mission" ClassName="mission">
          Missions
        </NavLink>
      </li>
      <Link to="/profile">
        <li className="navlink" title="profile">
          My Profile
        </li>
      </Link>
    </nav>
  );
}
