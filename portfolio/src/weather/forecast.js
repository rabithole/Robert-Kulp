import React from 'react';
import styles from '../css/noaa.module.css';

function Forecast(props) {
  // console.log(props)
  
	return (
		<div id={styles.forecast}>
      <h1>FORECAST</h1>
      <section>
        <p >{props.forecast}</p>
      </section>

		</div>
	);
}

export default Forecast;