import React from 'react';
import { Route } from 'react-router-dom';
import Guidr from './guidr/Guidr';
import NoaaApp from './weather/Noaa';
import Nav from './nav/Nav';
import Gooey from './past-projects/gooey/Gooey';


function App(props) {

  return (
    <div>
      <Nav/>

      <Route
        exact path='/'
        component={NoaaApp}
      >
      </Route>

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

      <Route
        path='/gooey'
        component={Gooey}
      >
      </Route>

      
      
    </div>
  );
}

export default App;