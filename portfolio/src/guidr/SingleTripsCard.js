import React from 'react';
// import axiosWithAuth from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';

import style from '../css/guidr.module.css';

function Trip(props) {
	// console.log(props);

  	return (
  		<div className={style.trip}>
  			<h1>Trip Details</h1>
  			<p><strong>TITLE: </strong>{props.title}</p>
  			<p><strong>DESCRIPTION: </strong>{props.description}</p>
        <p><strong>Duration: </strong>{props.duration}</p>
  			<p><strong>DISTANCE: </strong>{props.distance}</p>
  			<p><strong>DATE: </strong>{props.date}</p>
  			<p><strong>TYPE: </strong>{props.type}</p>

  			<Link to={`/guidr/UpdateTrip/${props.id}`}>
  				<button>Update Trip</button>
  			</Link>
  		</div>
  	);
}

export default Trip;
