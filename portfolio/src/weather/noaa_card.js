import React from 'react';
import axios from 'axios';

function NoaaCard(props) {
  console.log(props)
  
	return (
		<div>
      <h1>TEMPERATURE</h1>
      <h4>{props.temp}{'\u00B0'} F</h4>    

      <h1>ELEVATION</h1>
      <h4>{props.elevation} FT</h4>

      <h1>FREEZING LEVEL</h1>
      <h4>{}</h4>
		</div>
	);
}

export default NoaaCard;