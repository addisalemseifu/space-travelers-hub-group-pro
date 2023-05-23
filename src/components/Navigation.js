import React from 'react';
import { Link } from 'react-router-dom';
import planet from './planet.png';

export default function Navigation() {
  return (
    <nav>
      <img src={planet} alt="" />
      <Link to="/profile">
        <li className="navlink" title="profile">
          My Profile
        </li>
      </Link>
    </nav>
  );
}
