import React from 'react';
import '../css/noaa.css';

function Freezing(props) {
  // console.log(props)
  
	return (
		<div id='freezing'>
      		<section >
        		<p className='sectionTitle'>Freezing Level</p>
        		<p className='sectionContent'>{props.snowLevel} FT</p>
      		</section>
		</div>
	);
}

export default Freezing;