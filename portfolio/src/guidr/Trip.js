import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import { TripsContext } from '../contexts/TripsContext';

import style from '../css/guidr.module.css';

function Trip(props) {
	const { updateTrip } = useContext(TripsContext);
	// console.log(props.id);
	const history = useHistory();

	const deleteTrip = (event, id) => {
		event.preventDefault()

		axiosWithAuth()
		.delete(`/trips/${id}`)
		.then(response => {
			console.log('Deleted')
			updateTrip();
			history.push('/guidr/Trips')
		})
		.catch(error => {
			console.log(error)
		})
	}

  	return (
  		<div className={style.trip}>
  			<h1>{props.title}</h1>
  			
  			<h3>Click card for more details</h3>

  			<button onClick={event => deleteTrip(event, props.id)}>Delete Trip</button>
  			{/*<button onClick={event => updateTrip(event, props.id)}>Update Trip</button>*/}
  			<Link to={`/guidr/UpdateTrip/${props.id}`}>
  				<button>Update Trip</button>
  			</Link>
  		</div>
  	);
}

export default Trip;
