import React from 'react';
import { Route } from 'react-router-dom';
import Guidr from './Guidr';
import NoaaApp from './weather/Noaa';
// import Gooey from './past-projects/gooey/Gooey';

function App(props) {

  return (
    <div className='App'>
     	<header>
        <Route 
          path='/noaa'
          component={NoaaApp}
        >
        </Route>
     	</header>

      <Route
        path='/guidr'
        component={Guidr}
      >
      </Route>

      

      
      
    </div>
  );
}

export default App;

// <Route
//         path='/gooey'
//         component={Gooey}
//       >
//       </Route>

