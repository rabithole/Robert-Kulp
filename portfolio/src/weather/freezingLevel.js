import React from 'react';
import styles from '../css/noaa.module.css';

function Freezing(props) {
  // console.log(props)
  
	return (
		<div id={styles.freezing}>
      		<section >
        		<p className={styles.sectionTitle}>Freezing Level</p>
        		<p className={styles.sectionContent}>{props.snowLevel} FT</p>
      		</section>
		</div>
	);
}

export default Freezing;