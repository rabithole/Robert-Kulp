import React, { useState, useEffect } from 'react';
import './css/App.css';
// import './css/guidr.css';

import { getToken } from './utils/axiosWithAuth';
import axiosWithAuth from './utils/axiosWithAuth';
import { TripsContext } from './contexts/TripsContext';

import Login from './components/Login';
import SignUp from './components/SignUp';

import Trips from './components/Trips';
import Trip from './components/Trip';
import { Route, withRouter, NavLink } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import CreateTrip from './components/CreateTrip';
import Logout from './utils/Logout';
import UpdateTrip from './components/UpdateTrip';
import SingleTrip from './components/SingleTrip';
// import PastNav from './past-projects/past-nav';
// import CreateProfile from './components/CreateProfile';

const jwtDecode = require('jwt-decode');

function Guidr(props) {
  const [trips, setTrips] = useState([]);
  console.log('Trips', trips);
  const signedIn = getToken();

  function isSignedIn() {
     const decoded = jwtDecode(localStorage.getItem('token'));
      // console.log(decoded);
      trips.user_id = decoded.userid;
  }

  function updateTrip() {
    // console.log('updateTrip')
    axiosWithAuth()
    .get('trips')
    .then(response => {
      setTrips(response.data)
    })
    .catch(error => {
      localStorage.removeItem('token');
      props.history.push('/guidr/login');
      console.log(error)
    })
  }

  const dependArray = [trips.user_id, !signedIn, props.history, signedIn];

  useEffect(() => {
      // const decoded = jwtDecode(localStorage.getItem('token'));
      // // // console.log(decoded);
      // trips.user_id = decoded.userid;
      !signedIn ? console.log('Not Signed In, ya idiot!!!!!!!!!!!!!!!!!!!!!!!!!!!') : isSignedIn()

      axiosWithAuth()
      .get('trips')
      .then(response => {
        setTrips(response.data)
        // console.log(response);
      })
      .catch(error => {
        localStorage.removeItem('token');
        props.history.push('/guidr/login');
        console.log(error)
      })
    }, dependArray); 

  return (
    <div className='App'>
      <div id='guidr'>
      <section>
  	    <h1>Guided Trips</h1>
  	    <h5>A Lambda School Project</h5>
      </section>

        <nav>
          {!signedIn && 
            <NavLink 
              to='/guidr/SignUp'>
                Sign Up
            </NavLink>}

          {!signedIn &&
            <NavLink 
              to='/guidr/login' activeClassName='active'>
                Login
            </NavLink>}

          {signedIn && 
            <NavLink 
              to='/guidr/CreateTrip'>
                Add Trip
            </NavLink>}

          {signedIn && 
            <NavLink
              to='/guidr/Trips'>
                Trip List
            </NavLink>
          }

          {signedIn && 
            <NavLink
              to='/guidr/Logout'>
                Logout
            </NavLink>
          }
        </nav>

  {/*//////////////////////////////////////////////////*/}

        <Route 
          exact path='/guidr/login'
          component={Login}
        >
        </Route>
        
        <Route 
          exact path='/guidr/SignUp'
          component={SignUp}
        >
        </Route>
        
        <TripsContext.Provider value={{ trips, updateTrip }}>
          <ProtectedRoute
            exact path='/guidr/Trips'
            component={Trips}
          />

          <ProtectedRoute
            exact path='/guidr/Trip/:id'
            component={Trip}
          />

          <ProtectedRoute
            exact path='/guidr/SingleTrip/:id'
            component={SingleTrip}
          />

          <ProtectedRoute
            exact path='/guidr/UpdateTrip/:id'
            component={UpdateTrip}
          />

          <ProtectedRoute
          	exact path='/guidr/CreateTrip'
          	component={CreateTrip}
        	/>
        </TripsContext.Provider>

        <ProtectedRoute
          exact path='/guidr/Logout'
          component={Logout}
        />
      </div>
    </div>
  );
}

export default withRouter(Guidr);
