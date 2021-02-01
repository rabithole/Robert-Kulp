import React from 'react';
import styles from '../css/noaa.module.css';

function Location(props) {
  // console.log(props)
  
	return (
		<div id={styles.location}>
      <h1>LOCATION</h1>
      <section>
        <div className={styles.opacity}>
          <h1 className={ styles.inlineLeft }> Location</h1> 
          <p className={ styles.inlineRight }>{props.location}</p>
        </div>

        <div className={styles.opacity}>
          <h1 className={ styles.inlineLeft }> Elevation</h1> 
          <p className={ styles.inlineRight }>{props.elevation} Ft</p>
        </div>

        <div className={styles.opacity}>
          <h1 className={ styles.inlineLeft }> Wind Speed</h1> 
          <p className={ styles.inlineRight }>{props.windSpeed} MPH</p>
        </div>

        <div className={styles.opacity}>
          <h1 className={ styles.inlineLeft }> Wind Gust</h1> 
          <p className={ styles.inlineRight }>{props.windGust} MPH</p>
        </div>

        <div className={styles.opacity}>
          <h1 className={ styles.inlineLeft }> Wind Chill</h1> 
          <p className={ styles.inlineRight }>{props.windChill} {'\u00B0'}F</p>
        </div>

        <div className={styles.opacity}>
          <h1 className={ styles.inlineLeft }> Snow Fall</h1> 
          <p className={ styles.inlineRight }>{props.snowFallAmount} Inches</p>
        </div>

        <div className={styles.opacity}>
          <h1 className={ styles.inlineLeft }> Probability</h1> 
          <p className={ styles.inlineRight }>{props.probability}%</p>
        </div>
      </section>      

		</div>
	);
}

export default Location;