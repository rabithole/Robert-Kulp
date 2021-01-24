import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
// import '../css/main_nav.css';
import nav from '../css/main_nav.module.css';

function Nav(props) {
  

  return (
    <div className={nav.nav}>
      <nav>
        <Router forceRefresh={true}>
          <NavLink
            activeStyle={{
              backgroundColor: 'rgba(0, 119, 179, .6)',
              borderRight: '1px white dotted',
              borderBottom: '1px white dotted',
              borderRadius: '0px',
              borderBottomRightRadius: '5px',
              color: 'white'
            }}
            to='/noaa'>
            Snow
          </NavLink>

           <NavLink
            activeStyle={{
              backgroundColor: 'rgba(179,94,2, .6)',
              borderRight: '1px white dotted',
              borderBottom: '1px white dotted',
              borderRadius: '0px',
              borderBottomRightRadius: '5px',
              color: 'white'
            }}
            to='/guidr/login'>
            Lambda School 
          </NavLink>

          <NavLink
            activeStyle={{
                backgroundColor: 'rgba(244, 62, 136, .6)',
                borderRight: '1px white dotted',
                borderBottom: '1px white dotted',
                borderRadius: '0px',
                borderBottomRightRadius: '5px',
                color: 'white'
              }}
            to='/gooey'>
            Past Projects 
          </NavLink>

          <NavLink
            activeStyle={{
              backgroundColor: 'rgba(179,94,2, .6)',
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
              backgroundColor: 'rgba(179,94,2, .6)',
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