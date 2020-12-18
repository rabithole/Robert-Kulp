import React from 'react';
import axios from 'axios';
import '../css/noaa.css';

function NoaaCard(props) {
  // console.log(props)
  
	return (
		<div>
      {/* Daily temp details */}
      <h1 className='noaah1'>TEMPERATURE</h1>
       <section className='dataGroups'>
        <p id='currTemp'>Curr Temp</p>
        <p className='noaaP'>{props.currTemp}{'\u00B0'} F</p>
      </section>

      <section className='dataGroups'>
        <p>Max Temp</p>
        <p className='noaaP'>{props.maxTemp}{'\u00B0'} F</p>
      </section>

      <section className='dataGroups'>
        <p>Min Temp</p>
        <p className='noaaP'>{props.minTemp}{'\u00B0'} F</p>
      </section>


      {/* Location details */}
      <h1 className='noaah1'>{props.location}</h1>
      <section className='dataGroups'>
        <p>Elevation</p>
        <p className='noaaP'>{props.elevation} FT</p>  
      </section>

      <section className='dataGroups'>
        <p>Forecast</p>
        <p className='noaaP'>{props.forecast}{'\u00B0'} F</p>
      </section>

      <h1 className='noaah1'>SNOW LEVEL</h1>
      <section className='dataGroups'>
        <p className='noaaP'>{props.snowLevel} FT</p>
      </section>

		</div>
	);
}

export default NoaaCard;