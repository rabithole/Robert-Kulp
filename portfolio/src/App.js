import React, { useState, useEffect } from 'react';
import './css/App.css';
import './css/guidr.css';
// import './css/loader.css';

// import './css/loader.css';

import { getToken } from './utils/axiosWithAuth';
import axiosWithAuth from './utils/axiosWithAuth';
import { TripsContext } from './contexts/TripsContext';

import Login from './components/Login';
import SignUp from './components/SignUp';

import Trips from './components/Trips';
import Trip from './components/Trip';
import { Route, Link, withRouter } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import CreateTrip from './components/CreateTrip';
import Logout from './utils/Logout';
import UpdateTrip from './components/UpdateTrip';
import SingleTrip from './components/SingleTrip';
import Spinner from './components/Spinner.js';

let Loader = require('react-loader');
// import CreateProfile from './components/CreateProfile';

const jwtDecode = require('jwt-decode');

function App(props) {
  const [trips, setTrips] = useState([]);
  const [loaded, setLoaded] = useState(true);
  // console.log(trips);
  const signedIn = getToken();

  function isSignedIn() {
     const decoded = jwtDecode(localStorage.getItem('token'));
      // console.log(decoded);
      trips.user_id = decoded.userid;
  }

  function updateTrip() {
    axiosWithAuth()
    
    .get('trips')
    .then(response => {
      setTrips(response.data)
    })
    .catch(error => {
      localStorage.removeItem('token');
      props.history.push('/Login');
      console.log(error)
    })
  }

  const dependArray = [trips.user_id, !signedIn, props.history, signedIn];

  useEffect(() => {
      !signedIn ? console.log('Signed In') : isSignedIn()
      // setLoaded(false);
      
setTimeout(function(){
      axiosWithAuth()
      .get('trips')
      .then(response => {
        // setLoaded(true);        
        setTrips(response.data)
      })

      .catch(error => {
        localStorage.removeItem('token');
        props.history.push('/Login');
        console.log(error)
      })
}, 2000);
    }, dependArray); 


  return (
    <div className='App'>

     	<header>
      		<h1>A WORK IN PROGRESS</h1>
      		<h1>SOMETHING MORE IS COMING SOON!</h1>
     	</header>

    <div id='guidr'>
  <section>
	    <h1>Guided Trips</h1>
	    <h5>A Lambda School Project</h5>
	</section>

      <nav>
        {!signedIn && 
          <Link 
            to='/SignUp'>
              Sign Up
          </Link>}

        {!signedIn &&
          <Link 
            to='/Login'>
              Login
          </Link>}

        {signedIn && 
          <Link 
            to='/CreateTrip'>
              Add Trip
          </Link>}

        {signedIn && 
          <Link
            to='/Trips'>
              Trip List
          </Link>
        }

        {signedIn && 
          <Link
            to='/Logout'>
              Logout
          </Link>
        }
        {/*signedIn && 
          <Link 
            to='/CreateProfile'>
              Create Profile
          </Link>
        */}
      </nav>

{/*//////////////////////////////////////////////////*/}
      <Loader loaded={loaded} scale={15.00} color='black'>
        <Spinner />
      </Loader>

      <Route 
        exact path='/login'
        component={Login}
      >
      </Route>
      
      <Route 
        exact path='/SignUp'
        component={SignUp}
      >
      </Route>
      
      <TripsContext.Provider value={{ trips, updateTrip }}>
        <ProtectedRoute
          exact path='/Trips'
          component={Trips}
        />

        <ProtectedRoute
          exact path='/Trip/:id'
          component={Trip}
        />

        <ProtectedRoute
          exact path='/SingleTrip/:id'
          component={SingleTrip}
        />

        <ProtectedRoute
          exact path='/UpdateTrip/:id'
          component={UpdateTrip}
        />

        <ProtectedRoute
        	exact path='/CreateTrip'
        	component={CreateTrip}
      	/>
      </TripsContext.Provider>

      <ProtectedRoute
        exact path='/Logout'
        component={Logout}
      />

    </div>

    </div>
  );
}

export default withRouter(App);
