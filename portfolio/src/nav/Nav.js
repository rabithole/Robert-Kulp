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
            activeStyle={{
              backgroundColor: 'rgb(0, 119, 179)',
              color: 'white'
            }}
            to='/noaa'>
            NOAA
          </NavLink>

           <NavLink
            activeStyle={{
              backgroundColor: 'rgb(179,94,2)',
              color: 'rgb(243, 229, 216)'
            }}
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