import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

function Nav(props) {

  return (
    <div className='Nav'>
      <nav>
        <h1>What a nav</h1>
        <Router forceRefresh={true}>
          <NavLink
            to='/noaa'>
            NOAA
          </NavLink>

           <NavLink
            to='/guidr/login'>
            Outdoor Guide
          </NavLink>
        </Router>
      </nav>
    </div>
  );
}

export default Nav;