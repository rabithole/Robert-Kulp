import React from 'react';
// import '../css/noaa.css';

function Temperature(props) {
  // console.log('Temperature', props)
  
	return (
		<div>
      {/* Daily temp details */}
      <h1 className='noaah1'>TEMPERATURE</h1>
      <div id='temperature'>
      
        <section>
          <p className='sectionTitle'>Curr Temp</p>
          <p className='sectionContent'>{props.currTemp}{'\u00B0'} F</p>
        </section>

        <section >
          <p className='sectionTitle'>Max Temp</p>
          <p className='sectionContent'>{props.maxTemp}{'\u00B0'} F</p>
        </section>

        <section>
          <p className='sectionTitle'>Min Temp</p>
          <p className='sectionContent'>{props.minTemp}{'\u00B0'} F</p>
        </section>
      </div>

		</div>
	);
}

export default Temperature;