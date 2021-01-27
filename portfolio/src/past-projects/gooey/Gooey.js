import React from 'react';
import gooey from './ooweegooey.module.css';
import { Route } from 'react-router-dom';
import GooeyContact from './GooeyContact';
import GooeyMain from './Gooey-main';

function Gooey() {
  	return (
  		<div id={gooey.bodyWrap}>
  		<Route
        	exact path='/gooey/GooeyContact'
        	component={GooeyContact}
      	>
	    </Route>

	    <Route
	    	exact path='/gooey'
	    	component={GooeyMain}
	    >
	    </Route>

		 	
		</div>
	);
}

export default Gooey;
