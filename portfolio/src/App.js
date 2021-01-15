import React from 'react';
import { Route } from 'react-router-dom';
import Guidr from './Guidr';
import NoaaApp from './weather/Noaa';
import Nav from './nav/Nav';

function App(props) {

  return (
    <div className='App'>
      <Nav/>

      <header>
      </header>

      <Route 
        exact path='/noaa'
        component={NoaaApp}
      >
      </Route>

      <Route
        path='/guidr'
        component={Guidr}
      >
      </Route>
    </div>
  );
}

export default App;