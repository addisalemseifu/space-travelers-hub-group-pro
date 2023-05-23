import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from './planet.png'

export default function Navigation() {
  return (
    <nav>
      <img src={planet} alt="" />
      {/* <h3>Space Travelers' Hub</h3>
      <li className='links'
     ><NavLink to="/" ClassName='link'
      ><span className='my-link'>Rockets</span></NavLink></li>
      <li><NavLink to="/missions"><span className='my-link'>Missions</span> </NavLink></li>
      <span className='ver-line'></span>
      <li><NavLink to="/myprofile"><span className='my-link'>MY Profile</span></NavLink></li> */}
      
    </nav>
  );
}