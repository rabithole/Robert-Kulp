import React from 'react';
import '../css/noaa.css';

function Location(props) {
  // console.log(props)
  
	return (
		<div id='location'>
      <h1>LOCATION</h1>
      <section className='dataGroups'>
        <p className='noaaP'><b>Location:</b> {props.location}
        <br/>
        <b>Elevation:</b> {props.elevation} Ft
        <br/>
        <b>Wind Speed:</b> {props.windSpeed} MPH
        <br/>
        <b>Wind Gust:</b> {props.windGust} MPH
        <br/>
        <b>Wind Chill:</b> {props.windChill} {'\u00B0'}F
        </p>
      </section>      

		</div>
	);
}

export default Location;