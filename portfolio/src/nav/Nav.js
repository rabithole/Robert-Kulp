import React from 'react';
import { Route, NavLink } from 'react-router-dom';

function Nav(props) {

  return (
    <div className='Nav'>
      <nav>
        <h1>What a nav</h1>

        <NavLink
          to='/noaa'>
          NOAA
        </NavLink>

         <NavLink
          to='/guidr/login'>
          Outdoor Guide
        </NavLink>

      </nav>
    </div>
  );
}

export default Nav;