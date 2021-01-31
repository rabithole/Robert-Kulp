import React from 'react';
// import '../css/noaa.css';
import styles from '../css/noaa.module.css';

function Temperature(props) {
  // console.log('Temperature', props)
  
	return (
		<div>
      {/* Daily temp details */}
      <div id={styles.temperature}>
        <section>
        <p className={`${styles.sectionTitle} ${styles.currTemp}`}>Curr Temp</p>
          <p className={styles.sectionContent}>{props.currTemp}{'\u00B0'} F</p>
        </section>

        <section >
          <p className={styles.sectionTitle}>Max Temp</p>
          <p className={styles.sectionContent}>{props.maxTemp}{'\u00B0'} F</p>
        </section>

        <section>
          <p className={styles.sectionTitle}>Min Temp</p>
          <p className={styles.sectionContent}>{props.minTemp}{'\u00B0'} F</p>
        </section>
      </div>

		</div>
	);
}

export default Temperature;