import React from 'react';
import styles from '../css/noaa.module.css';

function Freezing(props) {
  console.log('Days', props.days, 'Hours', props.hours, 'Dates', props.dates, 'Freeze Values', props.freezeValues)
  
	return (
		<div id={styles.freezing}>
      		<section >
      			<svg>
      			</svg>
        		<p className={styles.sectionTitle}>Freezing Level</p>
        		<p className={styles.sectionContent}>{props.snowLevel} FT</p>
      		</section>
		</div>
	);
}

export default Freezing;