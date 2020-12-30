import React from 'react';
import '../css/noaa.css';

function Location(props) {
  // console.log(props)
  
	return (
		<div id='location'>
      <h1>LOCATION</h1>
      <section>
        <p><b>Location:</b> {props.location}</p>
        <p><b>Elevation:</b> {props.elevation} Ft</p>
        <p><b>Wind Speed:</b> {props.windSpeed} MPH</p>
        <p><b>Wind Gust:</b> {props.windGust} MPH</p>
        <p><b>Wind Chill:</b> {props.windChill} {'\u00B0'}F</p>
        <p><b>Snow Fall:</b> {props.snowFallAmount} Inches</p>
        <p><b>Probability:</b> {props.probability}%</p>
      </section>      

		</div>
	);
}

export default Location;