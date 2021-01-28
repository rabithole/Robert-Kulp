import React from 'react';
import gooey from './ooweegooey.module.css';
import { Route } from 'react-router-dom';
import GooeyContact from './GooeyContact';
import GooeyMain from './Gooey-main';
import Pricing from './Pricing';

function Gooey() {
  	return (
  		<div >
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

	    <Route
	    	exact path='/gooey/pricing'
	    	component={Pricing}
	    >
	    </Route>
		 	
		</div>
	);
}

export default Gooey;
