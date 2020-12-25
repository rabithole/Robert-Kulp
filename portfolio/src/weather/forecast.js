import React from 'react';
import '../css/noaa.css';

function Forecast(props) {
  // console.log(props)
  
	return (
		<div id='forecast'>
      <h1>FORECAST</h1>
      <section className='dataGroups'>
        <p className='noaaP'>{props.forecast}</p>
      </section>

		</div>
	);
}

export default Forecast;