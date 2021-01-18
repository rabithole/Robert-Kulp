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
              borderRight: '1px white dotted',
              borderBottom: '1px white dotted',
              borderRadius: '0px',
              borderBottomRightRadius: '5px',
              color: 'white'
            }}
            to='/noaa'>
            NOAA
          </NavLink>

           <NavLink
            activeStyle={{
              backgroundColor: 'rgb(179,94,2)',
              borderRight: '1px white dotted',
              borderBottom: '1px white dotted',
              borderRadius: '0px',
              borderBottomRightRadius: '5px',
              color: 'white'
            }}
            to='/guidr/login'>
            Guidr 
          </NavLink>

          <NavLink
            activeStyle={{
                backgroundColor: 'rgb(179,94,2)',
                borderRight: '1px white dotted',
                borderBottom: '1px white dotted',
                borderRadius: '0px',
                borderBottomRightRadius: '5px',
                color: 'white'
              }}
            to='/pastProjects'>
            Past Projects 
          </NavLink>

          <NavLink
            activeStyle={{
              backgroundColor: 'rgb(179,94,2)',
              borderRight: '1px white dotted',
              borderBottom: '1px white dotted',
              borderRadius: '0px',
              borderBottomRightRadius: '5px',
              color: 'white'
            }}
            to='/adventures'>
            Adventures 
          </NavLink>

          <NavLink
            activeStyle={{
              backgroundColor: 'rgb(179,94,2)',
              borderRight: '1px white dotted',
              borderBottom: '1px white dotted',
              borderRadius: '0px',
              borderBottomRightRadius: '5px',
              color: 'white'
            }}
            to='/aboutMe'>
            About Me 
          </NavLink>
        </Router>
      </nav>
    </div>
  );
}

export default Nav;