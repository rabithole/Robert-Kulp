import React, { useContext } from 'react';
import { TripsContext } from '../contexts/TripsContext';
import Trip from '../components/Trip';
import { Link } from 'react-router-dom';

import style from '../css/guidr.module.css';

function Trips() {
	const { trips } = useContext(TripsContext);
 	// console.log(trips)
	return (
	  	<div className={style.trips}>
	  		
  			{trips.map(trip => (
  				<Link to={`/guidr/SingleTrip/${trip.id}`}>
	  				<Trip
	  					title={trip.title}
	  					key={trip.id}
	  					id={trip.id}
	  					description={trip.description}
	  					distance={trip.distance}
	  					date={trip.date}
	  					type={trip.trip_type}
	  				/>
  				</Link>
  			))}
	  		
	  	</div>
	);
}

export default Trips;