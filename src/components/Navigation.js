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
      <Link to="/profile">
        <li className="navlink" title="profile">
          My Profile
        </li>
      </Link>
    </nav>
  );
}
