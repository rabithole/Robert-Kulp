import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// import '../css/main_nav.css';
import nav from '../css/main_nav.module.css';

function Nav(props) {
  

  return (
    <div className={nav.nav}>
      <nav>
        <Router forceRefresh={true}>
          <NavLink
            to='/noaa'>
            NOAA
          </NavLink>

           <NavLink
            to='/guidr/login'>
            Guidr 
          </NavLink>

          <NavLink
            to='/pastProjects'>
            Past Projects 
          </NavLink>

          <NavLink
            to='/adventures'>
            Adventures 
          </NavLink>
        </Router>
      </nav>
    </div>
  );
}

export default Nav;