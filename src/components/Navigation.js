import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import planet from './planet.png';

export default function Navigation() {
  return (
    <nav>
      <img src={planet} alt="" />
      <li className="links">
        <NavLink to="/" ClassName="link">
          Rockets
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
