import { createContext } from "react";

// const context = createContext();
// console.log(context); // Logging the createContext object. 

export const TripsContext = createContext({
	updateTrip: () => {
		// console.log('updateTrip')
	},
});
// This creates the data object.
