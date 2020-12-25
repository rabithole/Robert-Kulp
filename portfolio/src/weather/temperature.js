import React from 'react';
// import '../css/noaa.css';

function Temperature(props) {
  // console.log('Temperature', props)
  
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

      <section className='dataGroups'>
        <p>Freezing Level</p>
        <p className='noaaP'>{props.snowLevel} FT</p>
      </section>
		</div>
	);
}

export default Temperature;