import React from 'react';
// import gooey from './ooweegooey.module.css';
import { Route } from 'react-router-dom';
import GooeyContact from './GooeyContact';
import GooeyMain from './Gooey-main';
import Pricing from './Pricing';
import Chocolate from './Chocolate';
import WhiteChoc from './White_choc';
import PeanutButter from './PeanutButter';

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

		<Route
	    	exact path='/gooey/chocolate'
	    	component={Chocolate}
	    >
	    </Route>

	    <Route
	    	exact path='/gooey/whiteChoc'
	    	component={WhiteChoc}
	    >
	    </Route>

	    <Route
	    	exact path='/gooey/peanutButter'
	    	component={PeanutButter}
	    >
	    </Route>
		 	
		</div>
	);
}

export default Gooey;
