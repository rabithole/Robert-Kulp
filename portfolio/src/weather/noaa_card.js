import React from 'react';
import axios from 'axios';
import '../css/noaa.css';

function NoaaCard(props) {
  // console.log(props)
  
	return (
		<div>
      <h1 className='noaah1'>TEMPERATURE</h1>
      <section className='dataGroups'>
        <p>Max Temp</p>
        <p className='noaah4'>{props.maxTemp}{'\u00B0'} F</p>
      </section>

      <section className='dataGroups'>
        <p>Min Temp</p>
        <p className='noaah4'>{props.minTemp}{'\u00B0'} F</p>
      </section>

      <section className='dataGroups'>
        <p>Current Temp</p>
        <p className='noaah4'>{props.currTemp}{'\u00B0'} F</p>
      </section>

      <h1 className='noaah1'>ELEVATION</h1>
      <p className='noaah4'>{props.elevation} FT</p>

      <h1 className='noaah1'>FREEZING LEVEL</h1>
      <p className='noaah4'>Freezing Level to come</p>
		</div>
	);
}

export default NoaaCard;